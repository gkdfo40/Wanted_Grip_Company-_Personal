import { ChangeEvent, FormEvent} from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { SearchIcon } from 'assets/svgs'
import { movieListState, currentPageState, filterText } from 'states/state'
import { IMovie } from 'types/movie.d'
import { getMovieApi } from 'services/movie'
import styles from './SearchBar.module.scss'

const SearchBar = () => {
  
  const setMovie = useSetRecoilState<IMovie[]>(movieListState)

  const setPage = useSetRecoilState<number>(currentPageState)
  const [text, setText] = useRecoilState<string>(filterText)
  
  const handleOnChangeText = (event: ChangeEvent<HTMLInputElement>) => setText(event.currentTarget.value)
  const handleClearInputText = () => setText('')

  const handleSubmitInputText = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getMovieApi({
      s: text,
      page:1
    }).then((res) => {
      if (res.data.Response === 'True') {
        setMovie(res.data.Search)
        setPage(2)
      }
      else {
        setMovie(()=>[])
      }
    }).catch(()=>{setMovie(()=>[])})
  }

  return (
    <form className={styles.inputFrom} onSubmit={handleSubmitInputText}>
      <SearchIcon />
      <input type='text' value={text} placeholder='검색어를 입력해주세요' onChange={handleOnChangeText} />
      <button type='button' onClick={handleClearInputText}>❌</button>
    </form>
  )
}

export default SearchBar
