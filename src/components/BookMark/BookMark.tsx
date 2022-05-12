import { useRecoilValue } from 'recoil'

import styles from './BookMark.module.scss'

import MovieItem from 'components/ItemCard/ItemCard'
import { bookMarkList } from 'states/state'

interface BookMarkProps{
  openModal:()=>void
}

const BookMark = ({openModal }: BookMarkProps) => {

  const bookMarks = useRecoilValue(bookMarkList)
  
  return (
    <div className={styles.bookMarkContainer}>
      <header>
        <div className={styles.title}>📌내 즐겨찾기</div>
      </header>
      <main>
        <ul className={styles.movieItemList}>
          <li className={styles.emptyHead} />
          {
            bookMarks.map((movie) => <MovieItem key={movie.imdbID} movie={movie} openModal={openModal} />)
          }
          <li className={styles.emptyFooter}>{bookMarks.length === 0 && '북마크 목록이 없습니다.'}</li>
        </ul>
      </main>
    </div>
  )
}

export default BookMark