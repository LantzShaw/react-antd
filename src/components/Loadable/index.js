/**
 * 以下是loadable简单实现原理，可以无缝切换
 */

import React, { Component } from 'react'

const Loadable = ({ loader, loading: Loading }) => {
    return class LoadableWrapper extends Component {
        state = {
            LoadedComponent: null,
        }

        componentDidMount() {
            loader().then((res) => {
                this.setState({ LoadedComponent: res.default })
            })
        }

        render() {
            const { LoadedComponent } = this.state

            return LoadedComponent ? <LoadedComponent /> : <Loading />
        }
    }
}

export default Loadable
