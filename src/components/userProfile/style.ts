import styled from 'styled-components'

import { Container } from '@/styles/common'

export const UserProfileStyle = styled.article`
  padding: 14px 21px;
  border-bottom: 1px solid var(--color-line-1);
  > div {
    ${Container};
  }
`

export const UserProfileHistoryStyle = styled.div``

export const UserProfileInfoStyle = styled.div`
  display: flex;
  gap: 17px;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 4px;
    color: var(--color-font-1);
  }
  p {
    font-size: 11px;
    color: var(--color-font-4);
  }
`

export const UserProfileThumbnailStyle = styled.div`
  figure {
    position: relative;
    width: 120px;
    height: 120px;
    border: 1px solid #f0f;
  }
  figcaption {
    position: absolute;
    left: 50%;
    bottom: -12px;
    transform: translateX(-50%);
  }
`
