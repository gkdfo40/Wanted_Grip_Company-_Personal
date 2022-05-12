import { useCallback, useState } from 'react'

const useToggle = (initialState: boolean = false): [boolean, any] => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState)
  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(()=> setState(prev => !prev), [])
  return [state, toggle]
}

export default useToggle