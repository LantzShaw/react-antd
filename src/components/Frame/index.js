import React, { Component } from 'react'

import { Layout, Menu, Row, Col, Avatar } from 'antd'

import { withRouter } from 'react-router-dom'

import { ExpandOutlined, BellOutlined, SkinOutlined } from '@ant-design/icons'

import logo from './logo.png'
import Lantz from './Lantz.jpeg'
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
                    <Row align={'middle'} style={{ height: '100%' }}>
                        <Col flex={12}>
                            <div className="logo react-logo">
                                <img src={logo} alt="" />
                            </div>
                        </Col>
                        <Col flex={1} offset={15}>
                            <div
                                className="react-hover"
                                style={{
                                    height: '40px',
                                    width: '40px',
                                    lineHeight: '40px',
                                    textAlign: 'center',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                    boxShadow: '-3px -3px 7px #fff, 3px 3px 5px #ceced1',
                                }}
                            >
                                <ExpandOutlined />
                            </div>
                            <div
                                className="react-hover"
                                style={{
                                    height: '40px',
                                    width: '40px',
                                    lineHeight: '40px',
                                    textAlign: 'center',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                    boxShadow: '-3px -3px 7px #fff, 3px 3px 5px #ceced1',
                                }}
                            >
                                <BellOutlined />
                            </div>
                            <div
                                className="react-hover"
                                style={{
                                    height: '40px',
                                    width: '40px',
                                    lineHeight: '40px',
                                    textAlign: 'center',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                    boxShadow: '-3px -3px 7px #fff, 3px 3px 5px #ceced1',
                                }}
                            >
                                <SkinOutlined />
                            </div>
                            <div
                                className="react-hover"
                                style={{
                                    height: '40px',
                                    width: '40px',
                                    lineHeight: '40px',
                                    textAlign: 'center',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                    boxShadow: '-3px -3px 7px #fff, 3px 3px 5px #ceced1',
                                }}
                            >
                                <Avatar src={Lantz} />
                            </div>
                        </Col>
                    </Row>
                </Header>
                <Layout style={{ background: '#ecf0f3', padding: '0 0px 0px', boxShadow: 'inset -3px -3px 7px #fff, inset 3px 3px 5px #ceced1' }}>
                    <Sider width={200} collapsible className="site-layout-background">
                        <Menu
                            mode="inline"
                            onClick={this.handleMenuClick}
                            selectedKeys={[this.props.location.pathname]}
                            style={{ height: '100%', borderRight: 0, background: '#ecf0f3', padding: '0 0px 0px', boxShadow: 'inset -3px -3px 7px #fff, inset 3px 3px 5px #ceced1' }}
                        >
                            {this.props.menu.map((route) => {
                                return (
                                    <Menu.Item key={route.pathname} icon={<route.icon />}>
                                        {route.title}
                                    </Menu.Item>
                                )
                            })}
                        </Menu>
                    </Sider>
                    <Layout style={{ background: '#ecf0f3', padding: '0 0px 0px', boxShadow: 'inset -3px -3px 7px #fff, inset 3px 3px 5px #ceced1' }}>
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
