import React, { Component } from 'react'

import { Layout, Menu } from 'antd'

import { withRouter } from 'react-router-dom'

import logo from './logo.png'
import './frame.less'

const { Header, Content, Sider } = Layout

@withRouter
class Frame extends Component {
    handleMenuClick = ({ key }) => {
        this.props.history.push(key)
    }

    render() {
        return (
            <Layout style={{ height: '100%' }}>
                <Header className="header react-header">
                    <div className="logo react-logo">
                        <img src={logo} alt="" />
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu mode="inline" onClick={this.handleMenuClick} selectedKeys={[this.props.location.pathname]} style={{ height: '100%', borderRight: 0 }}>
                            {this.props.menu.map((route) => {
                                return (
                                    <Menu.Item key={route.pathname} icon={<route.icon />}>
                                        {route.title}
                                    </Menu.Item>
                                )
                            })}
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 0px 0px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Frame
