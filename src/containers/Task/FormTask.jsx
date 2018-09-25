import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import Button from 'components/Button'
import { Modal, ModalBody, ModalContent, ModalFooter } from 'components/Modal'
import { Select } from 'components/Form/Select'
import { Input } from 'components/Form/Input'
import { DateInput } from 'components/Form/DateInput'
import { Col, Row } from 'components/Layout'
import { Multiselect } from 'components/Form/Multiselect'
import { actions } from './state/actions'
import { GroupFields } from './styled'
import { crudSchema } from './utils'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

class FormTask extends Component {

  static defaultProps = {
    activeTask: {
      description: '',
      duration: '',
      durationUnit: 'MINUTE',
      reminder: '',
      reminderUnit: 'MINUTE',
      scheduleDate: '',
      tags: [{ value: 'chocolate', label: 'Chocolate' }],
      createdAt: null,
    },
    loading: null,
  }

  static propTypes = {
    activeTask: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    saveTask: PropTypes.func.isRequired,
    loading: PropTypes.string,
  }

  render() {
    const { activeTask, onClose, saveTask, loading } = this.props
    const isLoading = loading === 'save'

    return (
      <Modal onClose={onClose} open center>
        <Formik
          enableReinitialize
          initialValues={activeTask}
          validationSchema={crudSchema}
          onSubmit={(values, formActions) => {
            formActions.setSubmitting(false)

            saveTask(values)
          }}
          render={({ handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <ModalBody>
                <ModalContent size="500px">
                  <Row>
                    <Col>
                      <Input label="Descrição" name="description" />
                    </Col>
                    <Col>
                      <DateInput
                        label="Data"
                        name="scheduleDate"
                        onChange={value => setFieldValue('scheduleDate', value)}
                      />
                    </Col>
                    <Col>
                      <GroupFields>
                        <Input label="Duração" name="duration" type="number" />
                        <Select label="" name="durationUnit">
                          <option value="MINUTE">minutos</option>
                          <option value="HOUR">horas</option>
                        </Select>
                      </GroupFields>
                    </Col>
                    <Col>
                      <GroupFields>
                        <Input label="Lembrete" name="reminder" type="number" />
                        <Select label="" name="reminderUnit">
                          <option value="MINUTE">minutos</option>
                          <option value="HOUR">horas</option>
                        </Select>
                      </GroupFields>
                    </Col>
                    <Col>
                      <Multiselect
                        label="Tags"
                        name="tags"
                        placeholder="Selecione"
                        menuPlacement="top"
                        options={options}
                        onChange={value => setFieldValue('tags', value)}
                      />
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

const mapProps = ({ task }) => ({
  activeTask: task.modal.item,
  loading: task.loading,
})

const mapActions = {
  saveTask: actions.saveTask,
}

export default connect(mapProps, mapActions)(FormTask)
