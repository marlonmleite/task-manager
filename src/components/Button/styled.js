import styled from 'styled-components'

export const ButtonStyled = styled.button`
  padding: 0.4375rem 0.75rem;
  line-height: 1.25rem;
  font-size: 0.875rem;
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme, color }) => theme.button.text[color]};
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid ${({ theme, color }) => theme.colors[color]};
  border-radius: 2px;
  position: relative;

  :focus,
  :hover {
    text-decoration: none;
    background-image: linear-gradient(transparent, rgba(0,0,0,.05) 40%, rgba(0,0,0,.1));
  }

  :focus {
    outline: none;
  }

  .disabled,
  :disabled {
    opacity: .65;
    box-shadow: none;
  }

  :not([disabled]):not(.disabled) {
    cursor: pointer;
  }

  ${({ loading }) => loading && `
    > span {
      visibility: hidden;
    }
  `};
`

export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
