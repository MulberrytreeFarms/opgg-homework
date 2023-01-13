import { Outlet } from 'react-router-dom'

import Header from '@/components/header'

import { DefaultLayoutStyle, MainStyle } from './style'

const Layout = () => {
  return (
    <DefaultLayoutStyle>
      <Header>
        <Header.Search>
          <Header.SearchInput />
        </Header.Search>
      </Header>
      <MainStyle>
        <Outlet />
      </MainStyle>
    </DefaultLayoutStyle>
  )
}
export default Layout
