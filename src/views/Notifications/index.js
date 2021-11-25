import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, List, Avatar, Badge, Spin } from 'antd'

import {
    markNotificationsAsReadById,
    markAllNotificationsAsRead
} from '../../actions'

const mapState = state => {
    console.log('state', state)

    const { list, isLoading } = state.notifications

    return {
        list,
        isLoading
    }
}

@connect(mapState, {
    markNotificationsAsReadById,
    markAllNotificationsAsRead
})
class Notifications extends Component {
    render() {
        console.log(this.props.isLoading)

        return (
            <Spin spinning={this.props.isLoading}>
                <Card
                    title="通知中心"
                    bordered={false}
                    style={{ height: '100%' }}
                    extra={
                        <Button
                            type="primary"
                            onClick={this.props.markAllNotificationsAsRead}
                        >
                            全部标记为已读
                        </Button>
                    }
                >
                    <List
                        itemLayout="horizontal"
                        dataSource={this.props.list}
                        renderItem={item => (
                            <List.Item
                                extra={
                                    item.hasRead ? null : (
                                        <Button
                                            type="primary"
                                            ghost
                                            size="small"
                                            onClick={this.props.markNotificationsAsReadById.bind(
                                                this,
                                                item.id
                                            )}
                                        >
                                            标记为已读
                                        </Button>
                                    )
                                }
                            >
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    }
                                    title={
                                        <a href="https://ant.design">
                                            <Badge
                                                dot={
                                                    item.hasRead === false
                                                        ? true
                                                        : false
                                                }
                                            >
                                                {item.name}
                                            </Badge>
                                        </a>
                                    }
                                    description={item.desc}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </Spin>
        )
    }
}

export default Notifications
