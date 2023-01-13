import styled from 'styled-components'

import { Container } from '@/styles/common'

export const HeaderStyle = styled.header`
  background-color: var(--color-brand);
  > div {
    ${Container};
  }
`

export const HeaderInputWrapper = styled.div`
  display: block;
  width: 260px;
  padding: 53px 0 12px;
  margin-left: auto;

  input {
    width: 100%;
    padding: 9px 14px;
    font-size: 12px;
    background-color: var(--color-white);
    border-radius: 2px;
  }
`
