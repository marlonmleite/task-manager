import React from 'react'
import { Loading, LoadingFullscreenStyled } from './styled'

const LoadingRow = () => (
  <LoadingFullscreenStyled background="rgba(255, 255, 255, 0.85)">
    <Loading size="20px" />
  </LoadingFullscreenStyled>
)

export default LoadingRow
