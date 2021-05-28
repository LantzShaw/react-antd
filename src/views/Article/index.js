import React, { Component } from 'react'

import moment from 'moment'

import { Card, Button, Table, Tag } from 'antd'

import { getArticles } from '../../services'

const ButtonGroup = Button.Group

const titleDisplayMap = {
    id: 'ID',
    title: '标题',
    author: '作者',
    amount: '阅读量',
    createAt: '创建时间',
}

export default class ArticleList extends Component {
    constructor() {
        super()

        this.state = {
            columns: [],
            tableData: [],
            isLoading: false,
            offset: 0,
            limited: 10,
            total: null,
        }
    }

    componentDidMount() {
        this.getData()
    }

    createColumns = (columnKeys) => {
        const columns = columnKeys.map((item) => {
            if (item === 'amount') {
                return {
                    title: titleDisplayMap[item],
                    key: item,
                    align: 'center',
                    render: (text, record, index) => {
                        const { amount } = record

                        return <Tag color={amount > 150 ? 'purple' : 'red'}>{record.amount}</Tag>
                    },
                }
            }

            if (item === 'createAt') {
                return {
                    title: titleDisplayMap[item],
                    key: item,
                    align: 'center',
                    render: (text, record, index) => moment(record.createAt).format('YYYY年MM月DD日'),
                }
            }

            return {
                title: titleDisplayMap[item],
                dataIndex: item,
                key: item,
                align: 'center',
            }
        })

        columns.push({
            title: '操作',
            key: 'action',
            align: 'center',
            render: (text, record, index) => {
                return (
                    <ButtonGroup>
                        <Button type="primary" size="small" onClick={this.toEdit.bind(this, record.id)}>
                            编辑
                        </Button>
                        <Button size="small">删除</Button>
                    </ButtonGroup>
                )
            },
        })

        return columns
    }

    toEdit = (id) => {
        this.props.history.push(`/admin/article/edit/${id}`)
    }

    handlePageChange = (page, pageSize) => {
        console.log('on1', pageSize)

        console.log('world')
        this.setState(
            {
                offset: pageSize * (page - 1),
                limited: pageSize,
            },
            () => {
                this.getData()
            }
        )
    }

    handleSizeChange = (current, size) => {
        this.setState(
            {
                offset: 0,
            },
            () => {
                this.getData()
            }
        )
    }

    getData() {
        this.setState({ isLoading: true })

        getArticles({ offset: this.state.offset, limited: this.state.limited }).then((res) => {
            const columnKeys = Object.keys(res.list[0])

            const columns = this.createColumns(columnKeys)

            this.setState({
                total: res.total,
                columns,
                tableData: res.list,
                isLoading: false,
            })
        })
    }

    render() {
        return (
            <Card title="文章管理" bordered={false} style={{ height: '100%' }} extra={<Button type="primary">导出数据</Button>}>
                <Table
                    rowKey={(record) => record.id}
                    columns={this.state.columns}
                    dataSource={this.state.tableData}
                    loading={this.state.isLoading}
                    pagination={{
                        current: this.state.offset / this.state.limited + 1,
                        total: this.state.total,
                        showSizeChanger: true,
                        hideOnSinglePage: true,
                        onChange: this.handlePageChange,
                        showQuickJumper: true,
                        onShowSizeChange: this.handleSizeChange,
                    }}
                />
            </Card>
        )
    }
}
