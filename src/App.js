import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import { adminRoute } from './routes'

import { Frame } from './components'

const menu = adminRoute.filter(route => route.isNav)

// const testHOC = (WrappedComponent) => {
//     return class HOCComponent extends Component {
//         render() {
//             return (
//                 <>
//                     <WrappedComponent />
//                     <p>这是一个高阶组件</p>
//                 </>
//             )
//         }
//     }
// }

// @testHOC
class App extends Component {
  render() {
    return (
      <Frame menu={menu}>
        <Switch>
          {adminRoute.map(route => {
            return (
              <Route
                key={route.pathname}
                path={route.pathname}
                exact={route.exact}
                render={routerProps => {
                  return <route.component {...routerProps} />
                }}
              />
            )
          })}
          <Redirect to={adminRoute[0].pathname} from="/admin" exact />
          <Redirect to="/404" />
        </Switch>
      </Frame>
    )
  }
}

export default App
