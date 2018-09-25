import styled, { css } from 'styled-components'

export const PageTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

export const Title = styled.h5`
  color: #616161;
  text-transform: uppercase;
  margin: 0;
  padding: 0 15px;
  width: 100%;
`

export const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const FilterItem = styled.div`
  margin: 0 5px;

  :last-child {
    margin-right: 0;
  }
`

export const GridRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const ColumnDate = styled.div`
  display: flex;
  flex-direction: column;
  height: 36px;
  width: 36px;
  margin: 0 20px 0 10px;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  line-height: 12px;
  align-items: center;
  justify-content: center;

  span {
    :last-child {
      font-size: 10px;
      text-transform: uppercase;
    }
  }
`

export const ColumnDescription = styled.div`
  width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ completed }) => completed && css`
    color: #bbb;
    text-decoration: line-through;
  `}
`

export const ColumnSchedule = styled.div`
  display: flex;
  color: #777;

  span {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }

  svg {
    fill: currentColor;
    margin-right: 5px;
  }

  ${({ completed }) => completed && css`
    color: #bbb;
    text-decoration: line-through;
  `}
`

export const GroupFields = styled.div`
  display: flex;
  
  > div {
    margin: 0 15px;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }
`
