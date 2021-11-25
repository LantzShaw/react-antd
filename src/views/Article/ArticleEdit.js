import React, { Component, createRef } from 'react'

import { Card, Button, Form, Input, DatePicker } from 'antd'

import E from 'wangeditor'

const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 16 }
}

const tailLayout = {
    wrapperCol: { offset: 3, span: 16 }
}

export default class Edit extends Component {
    constructor() {
        super()

        this.editorRef = createRef()
    }

    componentDidMount() {
        this.editor = new E(this.editorRef.current)

        this.editor.create()
    }

    render() {
        return (
            <Card
                title="文章管理"
                bordered={false}
                style={{ height: '100%' }}
                extra={<Button type="default">返回</Button>}
            >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="时间"
                        name="creatAt"
                        rules={[{ required: true, message: '时间是必须的' }]}
                    >
                        <DatePicker showTime />
                    </Form.Item>
                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[{ required: true, message: '标题是必须的' }]}
                    >
                        <Input placeholder="请输入标题" />
                    </Form.Item>
                    <Form.Item
                        label="作者"
                        name="author"
                        rules={[{ required: true, message: '作者是必须的' }]}
                    >
                        <Input placeholder="请输入作者" />
                    </Form.Item>

                    <Form.Item
                        label="内容"
                        name="content"
                        rules={[{ required: true, message: '内容是必须的' }]}
                    >
                        <div ref={this.editorRef}></div>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            保存修改
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}
