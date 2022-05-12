import ReactDOM from 'react-dom'
import { useRecoilState, useRecoilValue } from 'recoil'

import { bookMarkButtonState, bookMarkList, pickMovie } from 'states/state'
import { IMovie } from 'types/movie'
import styles from './Modal.module.scss'


interface ModalProps{
  isShown: boolean
  closeModal:()=>void
}

const Modal = ({ isShown, closeModal }: ModalProps) => {
  const movie = useRecoilValue<IMovie>(pickMovie)
  const [markList, setMark] = useRecoilState<IMovie[]>(bookMarkList)
  const setButton = useRecoilValue(bookMarkButtonState)

  const handleAddMark = () => {
    setMark((prev) => { return [movie, ...prev] })
    closeModal()
  }
  
  const handleDeleteMark = () => {
    const fetch = markList.filter((item) => item.imdbID !== movie.imdbID)
    setMark(fetch)
    closeModal()
  }

  const modal: JSX.Element = (
    <main className={styles.modalBackground}>
      <aside>
        {setButton? <button type='button' onClick={handleAddMark}>즐겨찾기</button> : <button type='button' onClick={handleDeleteMark}>즐겨찾기 취소</button>}
        <button type='button' onClick={closeModal}>취소</button>
      </aside>
    </main>
  )
  const el = document.getElementById('modal')
  return isShown ? ReactDOM.createPortal(modal, el as Element) : null
}

export default Modal
