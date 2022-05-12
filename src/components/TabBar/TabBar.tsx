import { useSetRecoilState } from 'recoil'

import { currentTabState } from 'states/state'
import styles from './TabBar.module.scss'

const TabBar = () => {
  
  const setCurrentTabState = useSetRecoilState(currentTabState)
  
  const handleTabBarSwitch = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.value === 'MAIN') setCurrentTabState(true)
    if (event.currentTarget.value === 'MARK') setCurrentTabState(false) 
  }
  
  return (
    <div className={styles.tabBarContainer}>
      <button type='submit' value='MAIN' onClick={handleTabBarSwitch}>Movie</button>
      <button type='submit' value='MARK' onClick={handleTabBarSwitch}>BookMark</button>
    </div>

    
  )
}

export default TabBar