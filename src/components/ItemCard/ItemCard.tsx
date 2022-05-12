import { useSetRecoilState } from 'recoil'
import { pickMovie } from 'states/state'
import { IMovie } from 'types/movie.d'
import styles from './ItemCard.module.scss'

interface ItemProps{
  movie: IMovie
  openModal: () => void
}

const Item = ({ movie, openModal }: ItemProps) => {
  const target = useSetRecoilState<IMovie>(pickMovie)
  const handleClickItem = () => {
    target(movie)
    openModal()
  }

  return (
    <li key={movie.imdbID}>
      <button type='button' onClick={handleClickItem}>
        <article className={styles.item}>
          <img src={movie.Poster} alt='Poster' />
          <div>
            <dt>{movie.Title}</dt>
            <dd>연도: {movie.Year}년</dd>
            <dd>타입: {movie.Type}</dd>
          </div>
        </article>  
      </button>
    </li>
  )
}

export default Item