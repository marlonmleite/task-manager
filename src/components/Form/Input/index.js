import styled from 'styled-components'
import withFormGroup from '../withFormGroup'

export const InputComponent = styled.input`
  width: 100%;
  font-size: 15px;
  padding: 5px 5px 5px 0;
  height: 24px;
  border-color: #e5e5e5;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-radius: 0;
  color: #222;
  line-height: 24px;
  background-color: transparent;
  box-sizing: content-box;
 
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.focus};
  }

  :disabled {
    cursor: not-allowed;
  }
`

InputComponent.defaultProps = {
  type: 'text',
}

export const Input = withFormGroup(InputComponent)
