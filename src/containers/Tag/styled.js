import styled from 'styled-components'

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

export const GridRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const ColumnId = styled.div`
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
`

export const ColumnName = styled.div`
  width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
