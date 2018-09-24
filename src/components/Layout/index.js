import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Col = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  max-width: 100%;
  padding: 0 15px;

  ${({ size }) => `
    flex-basis: ${size};
    max-width: ${size};
  `}
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justify }) => justify};
`

Col.defaultProps = {
  size: '100%',
}

Col.propTypes = {
  size: PropTypes.string,
}

Row.defaultProps = {
  justify: 'flex-start',
}

Row.propTypes = {
  justify: PropTypes.string,
}
