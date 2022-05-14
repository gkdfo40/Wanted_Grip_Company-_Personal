import { useSetRecoilState } from 'recoil'

import NoImage from 'assets/svgs/notfound.svg'
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
    <article className={styles.item} onDoubleClick={handleClickItem}>
      <div>
        <div className={styles.poster}>
          <img src={movie.Poster === 'N/A' ? NoImage : movie.Poster} alt='Poster' draggable='false' />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{movie.Title}</p>
          <div>
            <p className={styles.year}>{movie.Year.slice(0, 4)}</p>
            <p className={styles.type}>{movie.Type.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </article>  
  )
}

export default Item
