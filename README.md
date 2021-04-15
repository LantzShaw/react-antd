# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

### 记录

```js
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
```
