import styled, { keyframes } from 'styled-components'

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
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #d5d5d5;
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  animation: ${spin} 1s linear infinite;
`

export const LoadingFullscreen = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
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
