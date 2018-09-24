import styled, { css } from 'styled-components'

const form = {
  labelOffset: '25px',
  paddingTop: '5px',
}

const topLabel = css`
  top: calc(${form.labelOffset} - (${form.paddingTop} + 10px));
  font-size: 12px;
`

export const FormGroupStyled = styled.div`
  width: 100%;
  font-size: 15px;
  position: relative;
  display: inline-flex;
  flex-direction: column; 
  color: ${({ theme }) => theme.form.label};
  padding: ${form.labelOffset} 0 10px 0;

  label {
    position: absolute;
    display: block;
    top: calc(${form.labelOffset} + ${form.paddingTop});
    left: 0px;
    transition: 0.2s ease all;
    pointer-events: none;
    cursor: text;
  }

  input {
    :focus ~ label,
    :not([value=""]) ~ label {
      ${topLabel};
    }
  }

  select,
  div {
    :focus ~ label,
    :not(.empty) ~ label {
      ${topLabel};
    }
  }

  input,
  select {
    :focus ~ label {
      color: ${({ theme }) => theme.focus};
    }
  }

  ${({ theme, invalid }) => invalid && css`
    input,
    select,
    input:focus,
    select:focus {
      border-color: ${theme.colors.danger};
    }

    input:focus ~ label,
    select:focus ~ label {
      color: inherit;
    }
  `};
`

export const ErrorStyled = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 13px;
`
