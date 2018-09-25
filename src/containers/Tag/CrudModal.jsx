import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import Button from 'components/Button'
import { Modal, ModalBody, ModalContent, ModalFooter } from 'components/Modal'
import { Input } from 'components/Form/Input'
import { Col, Row } from 'components/Layout'
import { actions } from './state/actions'
import { crudSchema } from './utils'

class CrudModal extends Component {

  static defaultProps = {
    activeTag: {
      name: '',
    },
    loading: null,
  }

  static propTypes = {
    activeTag: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    saveTag: PropTypes.func.isRequired,
    loading: PropTypes.string,
  }

  render() {
    const { activeTag, onClose, saveTag, loading } = this.props
    const isLoading = loading === 'save'

    return (
      <Modal onClose={onClose} open center>
        <Formik
          enableReinitialize
          initialValues={activeTag}
          validationSchema={crudSchema}
          onSubmit={(values, formActions) => {
            formActions.setSubmitting(false)

            saveTag(values)
          }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <ModalBody>
                <ModalContent size="300px">
                  <Row>
                    <Col>
                      <Input label="Nome" name="name" />
                    </Col>
                  </Row>
                </ModalContent>
                <ModalFooter justify="flex-end">
                  <Button type="submit" loading={isLoading}>Salvar</Button>
                </ModalFooter>
              </ModalBody>
            </form>
          )}
        />
      </Modal>
    )
  }

}

const mapProps = ({ tag }) => ({
  activeTag: tag.modal.item,
  loading: tag.loading,
})

const mapActions = {
  saveTag: actions.saveTag,
}

export default connect(mapProps, mapActions)(CrudModal)
