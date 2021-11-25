import actionTypes from './actionTypes'

export const increase = () => {
    console.log('step1', actionTypes.INCREASE_COUNT)
    return {
        type: actionTypes.INCREASE_COUNT,
        payload: {}
    }
}

export const decrease = () => {
    console.log('step2', actionTypes.DECREASE_COUNT)
    return {
        type: actionTypes.DECREASE_COUNT,
        payload: {}
    }
}
