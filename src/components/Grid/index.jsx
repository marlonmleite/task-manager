import PropTypes from 'prop-types'
import React, { Component } from 'react'
import map from 'lodash/map'
import { Grid as GridStyled, GridItem, Remove, Finish, Edit } from './styled'

class Grid extends Component {

  static defaultProps = {
    onFinish: null,
  }

  static propTypes = {
    items: PropTypes.array.isRequired,
    render: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onFinish: PropTypes.func,
    onEdit: PropTypes.func.isRequired,
  }

  render() {
    const { items, render, onRemove, onFinish, onEdit } = this.props

    return (
      <GridStyled>
        {map(items, (item, index) => {
          const key = `grid-${index}`

          return (
            <GridItem key={key}>
              {render(item, index)}
              <div className="grid-actions">
                <Edit role="button" onClick={() => onEdit(item)} />
                {item.completed === false && (
                  <Finish role="button" onClick={() => onFinish(item)} />
                )}
                <Remove role="button" onClick={() => onRemove(item)} />
              </div>
            </GridItem>
          )
        })}
      </GridStyled>
    )
  }

}

export default Grid
