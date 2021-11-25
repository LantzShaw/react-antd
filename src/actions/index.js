import actionTypes from './actionTypes'

import { getNotifications } from '../services'

const startNotificationPost = () => {
    return {
        type: actionTypes.START_NOTIFICATION_POST
    }
}

const finishNotificationPost = () => {
    return {
        type: actionTypes.FINISH_NOTIFICATION_POST
    }
}

export const fetchNotifications = id => {
    // return {
    //     type: actionTypes.START_FETCH_NOTIFICATION,
    //     payload: {
    //         id: 1,
    //     },
    // }

    return dispatch => {
        dispatch(startNotificationPost())

        getNotifications().then(res => {
            console.log('res', res)

            dispatch({
                type: actionTypes.FETCH_NOTIFICATIONS,
                payload: {
                    list: res.list
                }
            })

            // dispatch(finishNotificationPost())
            // dispatch(() => {
            //     return {
            //         type: actionTypes.START_FETCH_NOTIFICATION,
            //         payload: {
            //             list: res.list,
            //         },
            //     }
            // })
        })
    }
}

export const markNotificationsAsReadById = id => {
    return dispatch => {
        dispatch(startNotificationPost())

        setTimeout(() => {
            dispatch({
                type: actionTypes.MARK_NOTIFICATIONS_AS_READ_BY_ID,
                payload: {
                    id
                }
            })

            dispatch(finishNotificationPost())
        }, 2000)
    }
}

export const markAllNotificationsAsRead = () => {
    return dispatch => {
        dispatch(startNotificationPost())

        setTimeout(() => {
            dispatch({
                type: actionTypes.MARK_ALL_NOTIFICATIONS_AS_READ
            })

            dispatch(finishNotificationPost())
        }, 2000)
    }
}
