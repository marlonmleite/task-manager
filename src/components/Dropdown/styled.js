import styled, { css } from 'styled-components'

export const Dropdown = styled.div`
  position: relative;

  > button {
    width: 100%;
  }
`

export const DropdownContent = styled.div`
  position: absolute;
  min-width: 200px;
  color: #89898a;
  background-color: #fff;
  border-radius: 2px;
  margin-top: 2px;
  padding: 3px 5px;
  top: 100%;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2);

  ${({ right }) => right && css`
    left: auto;
    right: 0;
  `};
`

export const DropdownButton = styled.div`
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: space-between;

  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const DropdownOption = styled.div`
  width: 100%;
  position: relative;
  padding: 0 1.25rem 0 1.5rem;
  box-sizing: border-box;
  color: #222;
  height: 36px;
  line-height: 36px;
  font-size: 14px;

  :hover {
    background-color: #eee;
    cursor: pointer;
  }

  ${({ selected }) => selected && css`
    :before {
      content: '';
      border-left: 2px solid #666;
      border-bottom: 2px solid #666;
      width: 10px;
      height: 6px;
      margin-top: -7px;
      position: absolute;
      left: 5px;
      top: 50%;
      transform: rotate(-45deg);
    }
  `};
`

export const CaretStyled = styled.div`
  margin-left: 10px;
  width: 0px;
  height: 0px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid ${({ color, theme }) => theme.button.text[color]};
`
