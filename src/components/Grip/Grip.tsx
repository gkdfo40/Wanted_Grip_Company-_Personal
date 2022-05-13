import { useRecoilValue } from 'recoil'

import useToggle from 'hooks/useToggle'
import { currentTabState } from 'states/state'
import styles from './Grip.module.scss'

import Movie from 'components/Movie/Movie'
import BookMark from 'components/BookMark/BookMark'
import TabBar from 'components/TabBar/TabBar'
import Modal from 'components/Modal/Modal'

const Grip = () => {
  const tabState = useRecoilValue(currentTabState)
  const [isShown, toggleModal] = useToggle()

  return (
    <>
      <div className={styles.app}>
        <div className={styles.appContainer}>
          {tabState ?
            <Movie openModal={toggleModal} /> : <BookMark openModal={toggleModal} />
          }
          <TabBar />
        </div>
      </div>
      <Modal isShown={isShown} closeModal={toggleModal} />
    </> 
  )
}

export default Grip
