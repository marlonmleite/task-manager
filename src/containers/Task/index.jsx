import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from 'components/Grid'
import { Page, PageContent } from 'components/Page'
import { Dropdown, DropdownOption } from 'components/Dropdown'
import FabButton from 'components/FabButton'
import CalendarIcon from 'core/assets/svg/calendar.svg'
import ClockIcon from 'core/assets/svg/clock.svg'
import { actions } from './state/actions'
import { PageTop, Title, Filter, FilterItem, Row, ColumnDate, ColumnDescription, ColumnSchedule } from './styled'

class Task extends Component {

  componentDidMount() {
    const { loadTasks } = this.props

    loadTasks()
  }

  renderItem = (task) => {
    return (
      <Row>
        <ColumnDate>
          <b>10</b>
          <span>Jan</span>
        </ColumnDate>
        <ColumnDescription>
          {task.description}
        </ColumnDescription>
        <ColumnSchedule>
          <span><CalendarIcon width={16} height={16} /> 24/02/2018</span>
          <span><ClockIcon width={16} height={16} /> 08:24</span>
        </ColumnSchedule>
      </Row>
    )
  }

  render() {
    const { tasks } = this.props

    return (
      <Page>
        <PageTop>
          <Title>
            Hoje
          </Title>
          <Filter>
            <FilterItem>
              <Dropdown color="secondary" text="Tarefas" right>
                <DropdownOption selected>Todas</DropdownOption>
                <DropdownOption>Realizadas</DropdownOption>
                <DropdownOption>Pendentes</DropdownOption>
              </Dropdown>
            </FilterItem>
            <FilterItem>
              <Dropdown color="secondary" text="Mês" right>
                <DropdownOption selected>Dia</DropdownOption>
                <DropdownOption>Semana</DropdownOption>
                <DropdownOption>Mês</DropdownOption>
              </Dropdown>
            </FilterItem>
          </Filter>
        </PageTop>
        <PageContent>
          <Grid
            items={tasks}
            render={this.renderItem}
          />
        </PageContent>
        <FabButton color="info" />
      </Page>
    )
  }

}

Task.propTypes = {
  tasks: PropTypes.array.isRequired,
  loadTasks: PropTypes.func.isRequired,
}

const mapProps = ({ task }) => ({
  tasks: task.tasks,
})

const mapActions = {
  loadTasks: actions.loadTasks,
}

export default connect(mapProps, mapActions)(Task)
