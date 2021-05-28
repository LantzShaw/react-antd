import React, { Component } from 'react'

import { Layout, Menu, Avatar, Dropdown, Badge } from 'antd'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import { fetchNotifications } from '../../actions'

import {
  ExpandOutlined,
  BellOutlined,
  SkinOutlined,
  LogoutOutlined,
  ProfileFilled,
  BellFilled
} from '@ant-design/icons'

import logo from './logo.png'
import Lantz from './Lantz.jpeg'
import './frame.less'

const { Header, Content, Sider } = Layout

const mapState = state => {
  return {
    notificationCount: state.notifications.list.filter(
      item => item.hasRead === false
    ).length
  }
}

@connect(mapState, { fetchNotifications })
@withRouter
class Frame extends Component {
  componentDidMount() {
    this.props.fetchNotifications()
  }

  onHandleDropdownMenuClick = ({ key }) => {
    this.props.history.push(key)
  }

  menu = () => {
    console.log(Boolean(this.props.notificationCount))

    return (
      <Menu onClick={this.onHandleDropdownMenuClick}>
        <Menu.Item key="/admin/notification">
          <BellFilled />
          <Badge dot={Boolean(this.props.notificationCount)}>通知中心</Badge>
        </Menu.Item>
        <Menu.Item key="/admin/settings">
          <ProfileFilled />
          个人中心
        </Menu.Item>
        <Menu.Item key="/login">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    )
  }

  handleMenuClick = ({ key }) => {
    this.props.history.push(key)
  }

  render() {
    const selectedKeyArr = this.props.location.pathname.split('/')

    selectedKeyArr.length = 3

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header
          className="header react-header"
          style={{ position: 'fixed', zIndex: 1, width: '100%' }}
        >
          <div className="logo react-logo">
            <img src={logo} alt="" />
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
              boxShadow: '-3px -3px 7px #fff, 3px 3px 5px #ceced1'
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
              boxShadow: '-3px -3px 7px #fff, 3px 3px 5px #ceced1'
            }}
          >
            <SkinOutlined />
          </div>

          <Dropdown overlay={this.menu()} placement="bottomCenter" arrow>
            <Badge
              count={this.props.notificationCount}
              offset={[-8, 2]}
              overflowCount={99}
            >
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
                  boxShadow: '-3px -3px 7px #fff, 3px 3px 5px #ceced1'
                }}
              >
                <BellOutlined />
              </div>
            </Badge>
          </Dropdown>

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
              boxShadow: '-3px -3px 7px #fff, 3px 3px 5px #ceced1'
            }}
          >
            <Avatar src={Lantz} />
          </div>
        </Header>
        <Sider
          width={200}
          collapsible
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            top: '63px',
            left: 0
          }}
        >
          <Menu
            mode="inline"
            onClick={this.handleMenuClick}
            // selectedKeys={[this.props.location.pathname]}
            selectedKeys={[selectedKeyArr.join('/')]}
            style={{
              height: '100%',
              borderRight: 0,
              background: '#ecf0f3',
              padding: '0 0px 0px',
              boxShadow: 'inset -3px -3px 7px #fff, inset 3px 3px 5px #ceced1'
            }}
          >
            {this.props.menu.map(route => {
              return (
                <Menu.Item key={route.pathname} icon={<route.icon />}>
                  {route.title}
                </Menu.Item>
              )
            })}
          </Menu>
        </Sider>

        <Layout
          style={{
            background: '#ecf0f3',
            padding: '0 0px 0px',
            boxShadow: 'inset -3px -3px 7px #fff, inset 3px 3px 5px #ceced1'
          }}
        >
          <Content
            className="site-layout site-layout-background"
            style={{
              padding: '0 50px',
              paddingBottom: '20px',
              paddingTop: '15px',
              marginTop: '64px',
              margin: '65px 0px 0 0px',
              overflow: 'initial',
              boxShadow: 'inset -3px -3px 7px #fff, inset 3px 3px 5px #ceced1'
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Frame
