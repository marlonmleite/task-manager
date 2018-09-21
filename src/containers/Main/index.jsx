import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from 'components/Header'
import Menu from 'components/Menu'
import routes from '../../routes'
import { Container, Main as MainStyled, Sidebar } from './styled'

const Main = () => (
  <MainStyled>
    <Switch>
      {routes.map(route => (
        <Header
          key={route.path}
          title={route.title}
        />
      ))}
    </Switch>
    <Container>
      <Sidebar>
        <Menu />
      </Sidebar>
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
    </Container>
  </MainStyled>
)

export default Main

