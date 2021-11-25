import actionTypes from '../actions/actionTypes'

const initState = {
    count: 0
}

console.log('step3')

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.INCREASE_COUNT:
            return {
                ...state,
                count: state.count + 1
            }

        case actionTypes.DECREASE_COUNT:
            return {
                ...state,
                count: state.count - 1
            }

        default:
            return state
    }
}

// const products = (state = initState, action) => {
//     console.log(action)

//     switch (action.type) {
//         case actionTypes.INCREASE_COUNT:
//             return {
//                 ...state,
//                 count: state.count + 1
//             }

//         case actionTypes.DECREASE_COUNT:
//             console.log('descrese')
//             return {
//                 ...state,
//                 count: state.count - 1
//             }

//         default:
//             return state
//     }
// }

// export default products
