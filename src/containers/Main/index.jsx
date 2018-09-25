import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from 'components/Header'
import Menu from 'components/Menu'
import routes from '../../routes'
import { Container, Main as MainStyled, Sidebar } from './styled'
import 'react-toastify/dist/ReactToastify.css'

const Main = () => (
  <MainStyled>
    <Switch>
      {routes.map(route => (
        <Header
          key={route.path}
          path={route.path}
          exact={route.exact}
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
    <ToastContainer />
  </MainStyled>
)

export default Main

