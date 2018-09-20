import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 26px 60px;
  box-sizing: border-box;
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  box-shadow: 0 0 6px 0 #00000040;
  box-sizing: border-box;
  background-color: #fff;
`
