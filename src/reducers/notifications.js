import actionTypes from '../actions/actionTypes'

const initState = {
  isLoading: false,
  list: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NOTIFICATIONS:
      return {
        ...state,
        list: action.payload.list
      }

    case actionTypes.FINISH_NOTIFICATION_POST:
      return {
        ...state,
        isLoading: false
      }

    case actionTypes.START_NOTIFICATION_POST:
      // return Object.assign({}, state, {
      //   list: action.payload.list
      // })
      return {
        ...state,
        isLoading: true
      }

    case actionTypes.MARK_NOTIFICATIONS_AS_READ_BY_ID:
      const newList = state.list.map(item => {
        if (action.payload.id === item.id) {
          item.hasRead = true
        }
        return item
      })

      return {
        ...state,
        list: newList
      }

    case actionTypes.MARK_ALL_NOTIFICATIONS_AS_READ:
      return {
        ...state,
        list: state.list.map(item => {
          item.hasRead = true

          return item
        })
      }

    default:
      return state
  }
}
