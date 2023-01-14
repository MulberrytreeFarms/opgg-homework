import { createContext, useContext } from 'react'

import { Props } from './types'

const TabContext = createContext<Props | null>(null)

export const useTabContext = () => {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error(
      'TabContext components cannot be rendered outside the TabContextProvider',
    )
  }
  return context
}

export default TabContext
