import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Row } from 'components/Layout'
import ButtonMore from './styled'

const INCREMENT = 1

class Pagination extends PureComponent {

  static defaultProps = {
    loading: false,
  }

  static propTypes = {
    page: PropTypes.number.isRequired,
    hasMore: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
  }

  handleClick = () => {
    const { onChange, page, loading } = this.props

    if (!loading) {
      onChange(page + INCREMENT)
    }
  }

  render() {
    const { hasMore, loading } = this.props

    if (!hasMore) {
      return null
    }

    return (
      <Row justify="center">
        <ButtonMore color="default" loading={loading} onClick={this.handleClick}>Mais...</ButtonMore>
      </Row>
    )
  }

}

export default Pagination
