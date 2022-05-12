import { useState, useEffect } from 'react'
import { IMovie } from 'types/movie'

function useLocalStorage() {
  const [state, setState] = useState<IMovie[]>(JSON.parse(window.localStorage.getItem('GripBookMark') as string))
  
  useEffect(() => {
    window.localStorage.setItem('GripBookMark', JSON.stringify(state))
  }, [state])
  
  return [state, setState]
}

export default useLocalStorage
