import React, { Component } from 'react'

import { Button, Pagination } from 'antd'

// const testHOC = (WrappedComponent) => {
//     return class HOCComponent extends Component {
//         render() {
//             return (
//                 <>
//                     <WrappedComponent />
//                     <p>这是一个高阶组件</p>
//                 </>
//             )
//         }
//     }
// }

// @testHOC
class App extends Component {
    render() {
        console.log(this.props)

        return (
            <div>
                <Button type="primary">默认按钮</Button>
                <Pagination showQuickJumper defaultCurrent={2} total={500} />
            </div>
        )
    }
}

export default App
