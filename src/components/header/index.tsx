import React from 'react'

import { HeaderInputWrapper, HeaderStyle } from './style'

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeaderStyle>
      <h1 className="blind-heading">OP.GG</h1>
      <div>{children}</div>
    </HeaderStyle>
  )
}

const HeaderSearch = ({ children }: { children: React.ReactNode }) => {
  return <HeaderInputWrapper>{children}</HeaderInputWrapper>
}

const HeaderSeachInput = () => {
  return <input type="text" placeholder="소환사명, 챔피언" />
}

Header.Search = HeaderSearch
Header.SearchInput = HeaderSeachInput

export default Header
