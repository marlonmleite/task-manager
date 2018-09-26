import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Page } from 'components/Page'
import { Row } from 'components/Layout'
import { actions as taskActions } from '../Task/state/actions'
import { actions as tagActions } from '../Tag/state/actions'
import { getDoughnutData, getLineData } from './utils'
import DoughnutChart from './DoughnutChart'
import LineChart from './LineChart'

class Home extends Component {

  static defaultProps = {
    doughnut: {
      completed: 0,
      pending: 0,
    },
    line: {},
  }

  static propTypes = {
    loadTasks: PropTypes.func.isRequired,
    loadTags: PropTypes.func.isRequired,
    doughnut: PropTypes.object,
    line: PropTypes.object,
  }

  componentDidMount() {
    this.props.loadTasks()
    this.props.loadTags()
  }

  render() {
    const { doughnut, line } = this.props

    return (
      <Page>
        <Row>
          <DoughnutChart value={doughnut} />
          <LineChart value={line} />
        </Row>
      </Page>
    )
  }

}

const mapProps = ({ task, tag }) => ({
  doughnut: getDoughnutData(task.tasks),
  line: getLineData(task.tasks, tag.tags),
})

const mapActions = {
  loadTasks: taskActions.loadTasks,
  loadTags: tagActions.loadTags,
}

export default connect(mapProps, mapActions)(Home)
