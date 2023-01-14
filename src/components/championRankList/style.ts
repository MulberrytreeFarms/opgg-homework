import styled from 'styled-components'

export const ChampionRankListItemStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
  color: var(--color-font-5);
  font-size: 11px;
  border-bottom: 1px solid var(--color-line-1);
  text-align: center;
  .tit {
    color: var(--color-font-2);
    font-size: 13px;
    font-weight: bold;
  }
  &:last-child {
    border-bottom: 0;
  }
`

export const ChampionRankListPickStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  text-align: left;
  figure {
    width: 45px;
    height: 45px;
    border: 1px solid #f0f;
    figcaption {
      text-indent: -9999px;
    }
  }
`
