import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import { convertUnixDate } from 'core/utils/date'
import Grid from 'components/Grid'
import { Page, PageContent } from 'components/Page'
import { Dropdown, DropdownOption } from 'components/Dropdown'
import { LoadingContent } from 'components/Loading'
import FabButton from 'components/FabButton'
import CalendarIcon from 'core/assets/svg/calendar.svg'
import ClockIcon from 'core/assets/svg/clock.svg'
import { actions } from './state/actions'
import { VIEW_TYPE, getTasks } from './utils'
import { PageTop, Title, Filter, FilterItem, Row, ColumnDate, ColumnDescription, ColumnSchedule } from './styled'

const VIEW_LABEL = {
  DAY: 'Dia',
  WEEK: 'Semana',
  MOUNTH: 'Mês',
}

const FilterTasks = {
  Todas: null,
  Realizadas: true,
  Pendentes: false,
}

class Task extends Component {

  state = {
    filterTask: null,
  }

  componentDidMount() {
    this.loadTasks()
  }

  componentDidUpdate(prevProps, prevState) {
    const { filterTask } = this.state

    if (prevState.filterTask !== filterTask) {
      this.loadTasks()
    }
  }

  loadTasks() {
    const { loadTasks } = this.props
    const { filterTask } = this.state
    const params = { search: filterTask }

    loadTasks(params)
  }

  changeFilterTask = filterTask => this.setState({ filterTask })

  renderItem = (task) => {
    const date = convertUnixDate(task.scheduleDate)

    return (
      <Row>
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
      </Row>
    )
  }

  renderPage = (tasks, title) => {
    const { viewType, changeViewType, tasksGrouped } = this.props
    const { filterTask } = this.state
    const isFirst = Object.keys(tasksGrouped).indexOf(title) === 0

    return (
      <Fragment key={title}>
        <PageTop>
          <Title>
            {title}
          </Title>
          {isFirst && (
            <Filter>
              <FilterItem>
                <Dropdown color="secondary" text={VIEW_LABEL[viewType]} right>
                  {map(VIEW_TYPE, (value, key) => (
                    <DropdownOption
                      selected={viewType === value}
                      onClick={() => this.changeViewType(value)}
                      key={key}
                    >
                      {VIEW_LABEL[value]}
                    </DropdownOption>
                  ))}
                </Dropdown>
              </FilterItem>
              <FilterItem>
                <Dropdown color="secondary" text="Tarefas" right>
                  {map(FilterTasks, (value, key) => (
                    <DropdownOption
                      selected={filterTask === value}
                      onClick={() => this.changeFilterTask(value)}
                      key={key}
                    >
                      {key}
                    </DropdownOption>
                  ))}
                </Dropdown>
              </FilterItem>
            </Filter>
          )}
        </PageTop>
        <PageContent>
          <Grid
            items={tasks}
            render={this.renderItem}
          />
        </PageContent>
        <FabButton color="info" />
      </Fragment>
    )
  }

  render() {
    const { tasksGrouped, loading } = this.props
    const loadingTasks = loading === 'tasks'

    return (
      <Page>
        {loadingTasks && <LoadingContent />}
        {!loadingTasks && map(tasksGrouped, this.renderPage)}
      </Page>
    )
  }

}

Task.defaultProps = {
  loading: null,
}

Task.propTypes = {
  tasksGrouped: PropTypes.object.isRequired,
  loadTasks: PropTypes.func.isRequired,
  viewType: PropTypes.string.isRequired,
  loading: PropTypes.string,
}

const mapProps = ({ task }) => ({
  tasksGrouped: getTasks(task),
  loading: task.loading,
  viewType: task.viewType,
})

const mapActions = {
  loadTasks: actions.loadTasks,
  changeViewType: actions.setViewType,
}

export default connect(mapProps, mapActions)(Task)
