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
            pageSize: 10,
            total: null,
        }
    }

    componentDidMount() {
        this.getData()
    }

    createColumns = (columnKeys) => {
        const columns = columnKeys.map((item) => {
            if (item === 'amount') {
                // 这里不要dataIndex
                return {
                    title: titleDisplayMap[item],
                    // dataIndex: item,
                    key: item,
                    align: 'center',
                    render: (text, record, index) => {
                        // const titleMap = {
                        //     '001': '总经理',
                        //     '002': '经理',
                        //     '003': '主管'
                        // }

                        // return <Tag color={titleMap[titleKey] > 150 ? 'purple' : 'red'}>{titleMap[titleKey]}</Tag>

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
                        <Button type="primary" size="small">
                            编辑
                        </Button>
                        <Button size="small">删除</Button>
                    </ButtonGroup>
                )
            },
        })

        return columns
    }

    handlePageChange(page, pageSize) {
        console.log({ page, pageSize })
    }

    getData() {
        this.setState({ isLoading: true })

        getArticles().then((res) => {
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
                    pagination={{ total: this.state.total, hideOnSinglePage: true, onChange: this.handlePageChange }}
                />
            </Card>
        )
    }
}
