import styled from 'styled-components'

export const TabStyle = styled.div`
  border: 1px solid var(--color-line-2);
`

export const TabHeaderStyle = styled.div`
  display: flex;
  justify-content: space-around;
`

export const TabItemStyle = styled.button`
  height: 44px;
  background-color: var(--color-bg-1);
  flex: 1;
  font-size: 12px;
  color: var(--color-font-5);
  border-right: 1px solid var(--color-line-2);
  border-bottom: 1px solid var(--color-line-2);
  &:last-child {
    border-right: 0;
  }

  &.active {
    color: var(--color-font-1);
    font-weight: bold;
    background-color: var(--color-bg-general);
    border-bottom: 1px solid var(--color-bg-general);
  }
`

export const TabEmpty = styled.div`
  font-size: 12px;
  text-align: center;
  padding: 20px 0;
`
