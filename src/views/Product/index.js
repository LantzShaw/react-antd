import React, {
    useState,
    useEffect,
    useCallback,
    useRef,
    useLayoutEffect
} from 'react'
import { connect } from 'react-redux'
import { Button, Input } from 'antd'

import { increase, decrease } from '../../actions/products'

const Product = props => {
    const { count, increase, decrease } = props
    const [data, setData] = useState(0)
    const [input, setInput] = useState('')
    const ref = useRef()

    console.log('hello react')

    console.log('ref', ref)

    useEffect(() => {
        console.log('step1')
    }, [])

    useEffect(() => {
        console.log('step2')
    }, [count])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setData(data + 1)
    //     }, 2000)

    //     return () => {
    //         clearTimeout(timer)
    //     }
    // }, [data])

    // const [count, setCount] = useState(0)

    // const handleIncrease = () => {
    //     setCount(count + 1)
    // }

    // const handleDecrease = () => {
    //     setCount(count - 1)
    // }

    const handleButtonClick = useCallback(() => {
        // setData(data + 1)
        console.log('data', data)
    }, [data]) // 依赖于data，每次data发生变化，handleButtonClick都会变

    const handleChange = () => {
        setData(data + 1)
    }

    useLayoutEffect(() => {
        ref.current = input
    })

    const handleTextInput = e => {
        // console.log(e.target.value)
        setInput(e.target.value)
    }

    const handleOk = useCallback(() => {
        console.log(ref)
    }, [ref])

    console.log('step 4', ref)

    return (
        <>
            <div>
                {/* <Button type="primary" onClick={() => setCount(count + 1)}>
                    increase
                </Button> */}
                <Button type="primary" onClick={increase}>
                    Increase
                </Button>
                {count}
                <Button type="primary" onClick={decrease}>
                    Decrease
                </Button>

                <p>
                    <Button type="primary" onClick={handleButtonClick}>
                        Click
                    </Button>
                    <Button type="primary" onClick={handleChange}>
                        change
                    </Button>
                </p>

                <p>{data}</p>

                <p>
                    <Input
                        placeholder="请输入"
                        value={input}
                        onChange={handleTextInput}
                    />
                    <Button type="primary" onClick={handleOk}>
                        OK
                    </Button>
                </p>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        count: state.products.count
    }
}

// 需从props解构出来才能用
const mapDispatchToProps = {
    increase,
    decrease
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

// export default connect(mapStateToProps, { increase, decrease })(Product)
