import Select from 'react-select'
import styled from 'styled-components'

const SelectStyled = styled(Select)`
  .multiselect {
    &__control {
      border-color: #e5e5e5;
      border-style: solid;
      border-width: 0 0 1px 0;
      border-radius: 0;
      background-color: transparent;
      min-height: 38px;

      &--is-focused {
        box-shadow: none;
        border-color: ${({ theme }) => theme.focus};
      }
    }

    &__value-container {
      padding: 5px 5px 5px 0;
    }

    &__menu {
      border-radius: 2px;
    }
  }
`

export default SelectStyled
