import { useCallback, useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useInView } from 'react-intersection-observer'

import { movieListState, currentPageState, filterText } from 'states/state'
import { getMovieApi } from 'services/movie'
import styles from './Movie.module.scss'

import MovieItem from '../ItemCard/ItemCard'
import SearchBar from '../SearchBar/SearchBar'

interface MovieProps{
  openModal:()=>void
}

const Movie = ({ openModal }: MovieProps) => {

  const [movies, setMovies] = useRecoilState(movieListState)
  const [pages, setPage] = useRecoilState(currentPageState)
  const filter = useRecoilValue(filterText)
  const [Liref, inView] = useInView()

  const [loading, setLoading]=useState<boolean>(false)

  const getMovie = useCallback(async () => {
    setLoading(true)
    await getMovieApi({
      s: filter,
      page:pages
    }).then((res) => {
      if (res.data.Response === 'True') {
        setMovies((prev) => { return prev.concat(res.data.Search) })
        setPage((prev)=>prev+1)
      } 
    })
    setLoading(false)
  }, [filter, pages, setMovies, setPage])

  useEffect(() => {
    if (inView && !loading) getMovie()
  },[getMovie, inView, loading])

  return (
    <div className={styles.mainContainer}>
      <header className={styles.title}>
        <SearchBar />
      </header>
      <main>
        <ul className={styles.movieItemList}>
          {movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} openModal={openModal} />)}
          {
            movies.length >= 10 ?
              <li ref={Liref} className={styles.loader} />
              :
              <li className={styles.loader}>{movies.length === 0 && '검색결과가 없습니다.'}</li>
          }
        </ul>
      </main>
    </div>
  )
}

export default Movie
