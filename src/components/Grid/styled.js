import styled from 'styled-components'
import RemoveIcon from 'core/assets/svg/delete.svg'
import FinishIcon from 'core/assets/svg/finish.svg'
import EditIcon from 'core/assets/svg/edit.svg'

const addDecorateIcon = Icon => styled(Icon)`
  fill: #777;
  width: 16px;
  height: 16px;
  padding: 5px;
  margin: 0 2px;

  :hover,
  :active {
    cursor: pointer;
    fill: #333;
  }
`

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
`

export const GridItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 14px;
  position: relative;

  .grid-actions {
    display: flex;
    visibility: hidden;
  }

  :hover {
    .grid-actions {
      visibility: visible;
    }
  }
`

export const Remove = addDecorateIcon(RemoveIcon)
export const Finish = addDecorateIcon(FinishIcon)
export const Edit = addDecorateIcon(EditIcon)
