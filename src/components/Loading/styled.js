import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

const spin = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

export const Loading = styled.div`
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #d5d5d5;
  border-top: 2px solid ${({ theme, color }) => theme.colors[color]};
  animation: ${spin} 1s linear infinite;

  ${({ size }) => css`
    width: ${size};
    height: ${size};
  `};
`

export const LoadingFullscreenStyled = styled.div`
  background-color: ${({ background }) => background};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadingContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

LoadingFullscreenStyled.defaultProps = {
  background: 'rgba(255, 255, 255, 0.6)',
}

Loading.defaultProps = {
  size: '75px',
  color: 'primary',
}
