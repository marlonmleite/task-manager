import PropTypes from 'prop-types'
import React, { Component } from 'react'
import get from 'lodash/get'
import Button from '../Button'
import { Modal } from './'
import { ModalFooter, ModalBody, ModalContent } from './styled'

class DeleteModal extends Component {

  static defaultProps = {
    item: null,
    labelKey: 'description',
  }

  static propTypes = {
    item: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    labelKey: PropTypes.string,
  }

  onConfirm = () => {
    const { onConfirm, onClose, item } = this.props

    onConfirm(item)
    onClose()
  }

  render() {
    const { item, onClose, labelKey } = this.props

    return (
      <Modal onClose={onClose} open center>
        <ModalBody>
          <ModalContent>
            <p>Você deseja remover <b>{get(item, labelKey)}</b>?</p>
          </ModalContent>
          <ModalFooter>
            <Button color="secondary" onClick={this.onConfirm}>Sim</Button>
            <Button color="secondary" onClick={onClose}>Não</Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    )
  }

}

export default DeleteModal
