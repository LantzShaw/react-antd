import React, { Component } from 'react'

// import less from 'less'
import { Button } from 'antd'

export default class NotFound extends Component {
    clickHandler = () => {
        console.log('click', window.less)

        window.less.modifyVars({
            '@primary-color': '#f40'
        })
    }

    render() {
        return (
            <>
                <Button type="primary" onClick={this.clickHandler}>
                    点击
                </Button>

                <div
                    style={{
                        background: '#ecf0f3',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}
                >
                    <div
                        style={{
                            background: '#ecf0f3',
                            width: '350px',
                            borderRadius: '10px',
                            height: '300px',
                            boxShadow:
                                ' -3px -3px 7px #fff,  3px 3px 5px #ceced1'
                        }}
                    ></div>
                    <div
                        style={{
                            background: '#ecf0f3',
                            width: '350px',
                            borderRadius: '10px',
                            height: '300px',
                            boxShadow:
                                ' -3px -3px 7px #fff,  3px 3px 5px #ceced1'
                        }}
                    ></div>
                    <div
                        style={{
                            background: '#ecf0f3',
                            width: '350px',
                            borderRadius: '10px',
                            height: '300px',
                            boxShadow:
                                ' -3px -3px 7px #fff,  3px 3px 5px #ceced1'
                        }}
                    ></div>
                    {/* <div style={{ background: '#ecf0f3', width: '350px', borderRadius: '10px', height: '300px', boxShadow: ' -3px -3px 7px #fff,  3px 3px 5px #ceced1' }}></div> */}
                </div>
            </>
        )
    }
}
