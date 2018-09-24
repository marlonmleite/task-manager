import PropTypes from 'prop-types'
import styled from 'styled-components'

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  color: #333;
`

export const ModalContent = styled.div`
  padding: 35px 0 20px 0;
  min-width: 300px;
  min-height: 30px;
  width: ${({ size }) => size};
`

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};

  button {
    margin: 0 5px;
  }
`

ModalContent.defaultProps = {
  size: 'auto',
}

ModalFooter.defaultProps = {
  justify: 'center',
}

ModalContent.propTypes = {
  size: PropTypes.string,
}

ModalFooter.propTypes = {
  justify: PropTypes.string,
}
