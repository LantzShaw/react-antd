import React from 'react'
import { render } from 'react-dom'

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import zhCN from 'antd/es/locale/zh_CN'

import { ConfigProvider } from 'antd'

import App from './App'

import store from './store'

import { mainRoute } from './routes'

import './index.less'

render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <Router>
                <Switch>
                    <Route
                        path="/admin"
                        render={routerProps => {
                            // TODO: 这里要做权限验证
                            return <App {...routerProps} />
                        }}
                    />

                    {mainRoute.map(item => {
                        return (
                            <Route
                                key={item.pathname}
                                path={item.pathname}
                                component={item.component}
                            />
                        )
                    })}
                    <Redirect to="/admin" from="/" exact />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        </ConfigProvider>
    </Provider>,
    document.querySelector('#root')
)
