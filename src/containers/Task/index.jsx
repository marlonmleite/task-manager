import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import { convertISOToDate } from 'core/utils/date'
import Grid from 'components/Grid'
import { Page, PageContent, PageTop, PageTitle } from 'components/Page'
import { LoadingContent, LoadingRow } from 'components/Loading'
import FabButton from 'components/FabButton'
import { DeleteModal } from 'components/Modal'
import Pagination from 'components/Pagination'
import CalendarIcon from 'core/assets/svg/calendar.svg'
import ClockIcon from 'core/assets/svg/clock.svg'
import { actions } from './state/actions'
import { actions as tagActions } from '../Tag/state/actions'
import { getTasks } from './utils'
import { GridRow, ColumnDate, ColumnDescription, ColumnSchedule } from './styled'
import TaskFilter from './TaskFilter'
import FormTask from './FormTask'

const MODAL_DELETE = 'delete'
const MODAL_FORM = 'crud'

class Task extends Component {

  componentDidMount() {
    const { loadTags } = this.props

    this.loadTasks()
    loadTags()
  }

  componentDidUpdate(prevProps) {
    const { completed } = this.props

    if (prevProps.completed !== completed) {
      this.loadTasks()
    }
  }

  loadTasks = (page = 1) => {
    const { loadTasks, completed } = this.props
    const params = { search: completed, page }

    loadTasks(params)
  }

  deleteTask = ({ id }) => {
    const { removeTask } = this.props

    removeTask(id)
  }

  completeTask = (task) => {
    const { saveTask } = this.props
    const newTask = { ...task, completed: true }

    saveTask(newTask, `${task.id}`)
  }

  confirmDelete = (task) => {
    const { openModal } = this.props

    openModal(MODAL_DELETE, task)
  }

  openCrudModal = (task) => {
    const { openModal } = this.props

    openModal(MODAL_FORM, task)
  }

  closeModal = () => this.props.openModal(null)

  renderItem = (task) => {
    const { loading } = this.props
    const date = convertISOToDate(task.scheduleDate)
    const isLoading = loading === `${task.id}`

    return (
      <Fragment>
        <GridRow>
          <ColumnDate>
            <b>{date.format('DD')}</b>
            <span>{date.format('MMM')}</span>
          </ColumnDate>
          <ColumnDescription completed={task.completed}>
            {task.description}
          </ColumnDescription>
          <ColumnSchedule completed={task.completed}>
            <span><CalendarIcon width={16} height={16} /> {date.format('L')}</span>
            <span><ClockIcon width={16} height={16} /> {date.format('HH:mm')}</span>
          </ColumnSchedule>
        </GridRow>
        {isLoading && <LoadingRow />}
      </Fragment>
    )
  }

  renderPage = (tasks, title) => {
    const { tasksGrouped } = this.props
    const isFirst = Object.keys(tasksGrouped).indexOf(title) === 0

    return (
      <Fragment key={title}>
        <PageTop>
          <PageTitle>
            {title}
          </PageTitle>
          {isFirst && <TaskFilter />}
        </PageTop>
        <PageContent>
          <Grid
            items={tasks}
            render={this.renderItem}
            onRemove={this.confirmDelete}
            onFinish={this.completeTask}
            onEdit={this.openCrudModal}
          />
        </PageContent>
        <FabButton color="info" onClick={() => this.openCrudModal()} />
      </Fragment>
    )
  }

  render() {
    const { tasksGrouped, loading, modalOpen, modalItem, pagination } = this.props
    const loadingTasks = loading === 'tasks'
    const loadingPagination = loading === 'pagination'
    const modalDeleteOpen = modalOpen === MODAL_DELETE
    const modalFormOpen = modalOpen === MODAL_FORM

    return (
      <Fragment>
        <Page>
          {loadingTasks && <LoadingContent />}
          {!loadingTasks && map(tasksGrouped, this.renderPage)}
          {!loadingTasks && (
            <Pagination
              page={pagination.page}
              hasMore={pagination.hasMore}
              onChange={this.loadTasks}
              loading={loadingPagination}
            />
          )}
        </Page>
        {modalDeleteOpen && (
          <DeleteModal
            item={modalItem}
            onConfirm={this.deleteTask}
            onClose={this.closeModal}
          />
        )}
        {modalFormOpen && <FormTask onClose={this.closeModal} />}
      </Fragment>
    )
  }

}

Task.defaultProps = {
  loading: null,
  completed: null,
  modalOpen: null,
  modalItem: null,
}

Task.propTypes = {
  tasksGrouped: PropTypes.object.isRequired,
  loadTasks: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  loading: PropTypes.string,
  completed: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  modalOpen: PropTypes.string,
  modalItem: PropTypes.object,
  pagination: PropTypes.object.isRequired,
  saveTask: PropTypes.func.isRequired,
  loadTags: PropTypes.func.isRequired,
}

const mapProps = ({ task }) => ({
  tasksGrouped: getTasks(task),
  loading: task.loading,
  completed: task.completed,
  modalOpen: task.modal.open,
  modalItem: task.modal.item,
  pagination: task.pagination,
})

const mapActions = {
  loadTasks: actions.loadTasks,
  openModal: actions.openModal,
  removeTask: actions.removeTask,
  saveTask: actions.saveTask,
  loadTags: tagActions.loadTags,
}

export default connect(mapProps, mapActions)(Task)
