import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from 'components/Header'
import Menu from 'components/Menu'
import routes from '../../routes'
import { Container, Content, ContentWrapper, Main as MainStyled } from './styled'

const Main = () => (
  <MainStyled>
    <Header />
    <Container>
      <Menu />
      <ContentWrapper>
        <Content>
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
          ))}
          </Switch>
        </Content>
      </ContentWrapper>
    </Container>
  </MainStyled>
)

export default Main

