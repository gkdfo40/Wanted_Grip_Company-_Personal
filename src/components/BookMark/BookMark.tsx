import { DragEvent, useState } from 'react'
import { useRecoilState } from 'recoil'

import styles from './BookMark.module.scss'

import MovieItem from 'components/ItemCard/ItemCard'
import { bookMarkList } from 'states/state'
import { IMovie } from 'types/movie'

interface BookMarkProps{
  openModal:()=>void
}

interface IDND{
  draggedFrom: number
  draggedTo: number
  isDragging: boolean
  originalOrder: IMovie[]
  updataedOrder: IMovie[]
}

const BookMark = ({openModal }: BookMarkProps) => {

  const [bookMarks, setBookMarks] = useRecoilState(bookMarkList)
  const [list, setList] = useState<IMovie[]>(bookMarks)
  const [dragAndDrop, setDragAndDrop] = useState<IDND>({
    draggedFrom: -1,
    draggedTo: -1,
    isDragging: false,
    originalOrder: [],
    updataedOrder:[]
  })

  const onDragStart = (e: DragEvent<HTMLLIElement>) => {
    const initialPosition = parseInt(e.currentTarget.dataset.position as string, 10)
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      originalOrder:list
    })
  }
  const onDragOver = (e: DragEvent<HTMLLIElement>) => {
    e.preventDefault()
    let newList = dragAndDrop.originalOrder
    const { draggedFrom } = dragAndDrop
    const draggedTo = parseInt(e.currentTarget.dataset.position as string, 10)
    const itemDragged = newList[draggedFrom]
    const remainingItems = newList.filter((_, index) => index !== draggedFrom)
    newList = [...remainingItems.slice(0, draggedTo), itemDragged, ...remainingItems.slice(draggedTo),]
    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updataedOrder: newList,
        draggedTo
      })
    }
  }

  const onDrop = () => {
    setList(dragAndDrop.updataedOrder)
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: -1,
      draggedTo:-1
    })
  }

  const onDragEnter = () => {
  }
  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo:-1
    })
  }
  const onDragEnd = () => {
    setBookMarks(list)
  }
  
  return (
    <div className={styles.bookMarkContainer}>
      <header>
        <div className={styles.title}>📌내 즐겨찾기</div>
      </header>
      <main>
        <ul className={styles.movieItemList}>
          <li className={styles.emptyHead} />
          {
            bookMarks.map((movie,index) =>
              <li
                key={movie.imdbID}
                data-position={index}
                role='menuitem'
                draggable='true'
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onDragLeave={onDragLeave}
                onDragEnter={onDragEnter}
                onDragEnd={onDragEnd}
              >
                <MovieItem
                  key={movie.imdbID}
                  movie={movie}
                  openModal={openModal}
                />
              </li>
              
            )
          }
          <li className={styles.emptyFooter}>{bookMarks.length === 0 && '북마크 목록이 없습니다.'}</li>
        </ul>
      </main>
    </div>
  )
}

export default BookMark