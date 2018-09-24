import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import { Dropdown, DropdownOption } from 'components/Dropdown'
import { actions } from './state/actions'
import { VIEW_TYPE } from './utils'
import { Filter, FilterItem } from './styled'

const VIEW_LABEL = {
  DAY: 'Dia',
  WEEK: 'Semana',
  MOUNTH: 'Mês',
}

const TASKS = {
  Todas: null,
  Realizadas: true,
  Pendentes: false,
}

class TaskFilter extends Component {

  render() {
    const { viewType, changeViewType, completed, changeCompleted } = this.props

    return (
      <Filter>
        <FilterItem>
          <Dropdown color="secondary" text={VIEW_LABEL[viewType]} right>
            {map(VIEW_TYPE, (value, key) => (
              <DropdownOption
                selected={viewType === value}
                onClick={() => changeViewType(value)}
                key={key}
              >
                {VIEW_LABEL[value]}
              </DropdownOption>
            ))}
          </Dropdown>
        </FilterItem>
        <FilterItem>
          <Dropdown color="secondary" text="Tarefas" right>
            {map(TASKS, (value, key) => (
              <DropdownOption
                selected={completed === value}
                onClick={() => changeCompleted(value)}
                key={key}
              >
                {key}
              </DropdownOption>
            ))}
          </Dropdown>
        </FilterItem>
      </Filter>
    )
  }

}

TaskFilter.defaultProps = {
  completed: null,
}

TaskFilter.propTypes = {
  viewType: PropTypes.string.isRequired,
  completed: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  changeViewType: PropTypes.func.isRequired,
  changeCompleted: PropTypes.func.isRequired,
}

const mapProps = ({ task }) => ({
  viewType: task.viewType,
  completed: task.completed,
})

const mapActions = {
  changeViewType: actions.setViewType,
  changeCompleted: actions.setCompleted,
}

export default connect(mapProps, mapActions)(TaskFilter)
