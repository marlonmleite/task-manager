import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Grid as GridStyled, GridItem } from './styled'

class Grid extends Component {

  render() {
    const { items, render } = this.props

    return (
      <GridStyled>
        {items.map((item, index) => {
          const key = `grid-${index}`

          return (
            <GridItem key={key}>{render(item, index)}</GridItem>
          )
        })}
      </GridStyled>
    )
  }

}

Grid.propTypes = {
  items: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
}

export default Grid
