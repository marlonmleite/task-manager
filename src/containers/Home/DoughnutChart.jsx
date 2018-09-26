import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Doughnut } from 'react-chartjs-2'
import { PageTop, PageTitle, PageContent } from 'components/Page'
import ChartContainer from './styled'

class DoughnutChart extends Component {

  static propTypes = {
    value: PropTypes.object.isRequired,
  }

  getDoughnutData() {
    const { value } = this.props

    return {
      labels: [
        'Tarefas completas',
        'Tarefas pendentes',
      ],
      datasets: [{
        data: [value.completed, value.pending],
        backgroundColor: [
          '#00b7ce',
          '#FF6384',
        ],
      }],
    }
  }

  render() {
    const options = { cutoutPercentage: 70 }

    return (
      <Fragment>
        <PageTop>
          <PageTitle>
              Tarefas completas
          </PageTitle>
        </PageTop>
        <PageContent>
          <ChartContainer>
            <Doughnut
              width={0}
              height={350}
              data={this.getDoughnutData()}
              options={options}
            />
          </ChartContainer>
        </PageContent>
      </Fragment>
    )
  }

}

export default DoughnutChart
