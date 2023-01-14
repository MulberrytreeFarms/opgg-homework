import classNames from 'classnames'
import { useMemo, useState } from 'react'

import TabContext, { useTabContext } from './context'
import { TabEmpty, TabHeaderStyle, TabItemStyle, TabStyle } from './style'

const Tab = ({ children }: { children: React.ReactNode }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0)
  const value = useMemo(
    () => ({
      activeIdx,
      setActiveIdx,
    }),
    [activeIdx, setActiveIdx],
  )
  return (
    <TabContext.Provider value={value}>
      <TabStyle>{children}</TabStyle>
    </TabContext.Provider>
  )
}

const TabHeader = ({ children }: { children: React.ReactNode }) => {
  return <TabHeaderStyle>{children}</TabHeaderStyle>
}

const TabItem = ({
  children,
  idx,
}: {
  children: React.ReactNode
  idx: number
}) => {
  const { activeIdx, setActiveIdx } = useTabContext()
  return (
    <TabItemStyle
      className={classNames({ active: activeIdx === idx })}
      type="button"
      onClick={() => setActiveIdx(idx)}
    >
      {children}
    </TabItemStyle>
  )
}

const TabContent = ({
  children,
  idx,
}: {
  children: React.ReactNode
  idx: number
}) => {
  const { activeIdx } = useTabContext()
  return activeIdx === idx ? (
    <div>{children}</div>
  ) : (
    <TabEmpty>Empty contents</TabEmpty>
  )
}

Tab.Header = TabHeader
Tab.Item = TabItem
Tab.Content = TabContent

export default Tab
