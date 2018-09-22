import PropTypes from 'prop-types'
import React, { Component } from 'react'
import map from 'lodash/map'
import { Grid as GridStyled, GridItem, Remove, Finish } from './styled'

class Grid extends Component {

  render() {
    const { items, render } = this.props

    return (
      <GridStyled>
        {map(items, (item, index) => {
          const key = `grid-${index}`

          return (
            <GridItem key={key}>
              {render(item, index)}
              <div className="grid-actions">
                <Remove />
                <Finish />
              </div>
            </GridItem>
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
