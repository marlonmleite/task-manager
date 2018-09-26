import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
import { PageTop, PageTitle, PageContent } from 'components/Page'
import ChartContainer from './styled'

class LineChart extends Component {

  static propTypes = {
    value: PropTypes.object.isRequired,
  }

  getLineData() {
    const { value: { labels, data } } = this.props

    return {
      labels,
      datasets: [
        {
          label: 'Tarefas completas',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 4,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data,
        },
      ],
    }
  }

  getLineOptions() {
    return {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false,
          },
        }],
      },
    }
  }

  render() {
    return (
      <Fragment>
        <PageTop>
          <PageTitle>
              Tarefas completas por Tags
          </PageTitle>
        </PageTop>
        <PageContent>
          <ChartContainer>
            <Line
              width={0}
              height={350}
              data={this.getLineData()}
              options={this.getLineOptions()}
            />
          </ChartContainer>
        </PageContent>
      </Fragment>
    )
  }

}

export default LineChart
