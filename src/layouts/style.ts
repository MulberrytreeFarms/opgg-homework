import styled from 'styled-components'

export const DefaultLayoutStyle = styled.div``

export const MainStyle = styled.main``

export const ScoreBodyStyle = styled.div`
  display: flex;
  padding: 10px 0;
  gap: 10px;
  ${Container};

  .left-wrapper {
    width: 300px;
  }

  .right-wrapper {
    flex: 1;
  }
`
