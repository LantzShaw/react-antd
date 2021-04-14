import React, { Component } from 'react'

import { Card, Button, Table, Tag } from 'antd'

import { getArticles } from '../../services'

const titleDisplayMap = {
    id: 'ID',
    title: '标题',
    author: '作者',
    amount: '阅读量',
    createdAt: '创建时间',
}

export default class ArticleList extends Component {
    constructor() {
        super()

        this.state = {
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    align: 'center',
                },
                {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                    align: 'center',
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'address',
                    align: 'center',
                },
                {
                    title: 'Tags',
                    dataIndex: 'tags',
                    key: 'tags',
                    align: 'center',
                    render: (text, record, index) =>
                        text.map((item) => (
                            <Tag key={item} color="magenta">
                                {item}
                            </Tag>
                        )),
                },
                {
                    title: 'Action',
                    dataIndex: 'action',
                    key: 'action',
                    align: 'center',
                    render: () => {
                        return (
                            <>
                                <Button>编辑</Button>
                                <Button>删除</Button>
                            </>
                        )
                    },
                },
            ],
            tableData: [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
            ],
            total: null,
        }
    }

    componentDidMount() {
        this.getData()
    }

    createColumns = (columnKeys) => {
        return columnKeys.map((item) => {
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

            return {
                title: titleDisplayMap[item],
                dataIndex: item,
                key: item,
                align: 'center',
            }
        })
    }

    getData() {
        getArticles().then((res) => {
            console.log('res', res)
            const columnKeys = Object.keys(res.list[0])

            const columns = this.createColumns(columnKeys)

            this.setState({
                total: res.total,
                columns,
                tableData: res.list,
            })
        })
    }

    render() {
        return (
            <Card title="文章管理" bordered={false} style={{ height: '100%' }} extra={<Button type="primary">导出数据</Button>}>
                <Table columns={this.state.columns} dataSource={this.state.tableData} loading={false} pagination={{ total: this.state.total, hideOnSinglePage: true }} />
            </Card>
        )
    }
}
