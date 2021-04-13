import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import { adminRoute } from './routes'

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
        console.log(this.props)

        return (
            <>
                <div>这里是公共部分</div>
                <Switch>
                    {adminRoute.map((route) => {
                        return (
                            <Route
                                key={route.pathname}
                                path={route.pathname}
                                exact={route.exact}
                                render={(routerProps) => {
                                    return <route.component {...routerProps} />
                                }}
                            />
                        )
                    })}
                    <Redirect to={adminRoute[0].pathname} from="/admin" exact />
                    <Redirect to="/404" />
                </Switch>
            </>
        )
    }
}

export default App
