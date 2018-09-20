import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from 'components/Grid'
import { actions } from './state/actions'

class Task extends Component {

  componentDidMount() {
    const { loadTasks } = this.props

    loadTasks()
  }

  renderItem = (task) => {
    return <p>{task.description}</p>
  }

  render() {
    const { tasks } = this.props

    return (
      <Grid
        items={tasks}
        render={this.renderItem}
      />
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
