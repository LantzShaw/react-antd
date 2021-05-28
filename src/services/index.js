import axios from 'axios'

import { message } from 'antd'

const isDev = process.env.NODE_ENV === 'development'

const ajax = axios.create({
  baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/280952' : ''
})

ajax.interceptors.request.use(config => {
  // config.headers = {
  //     ...config.headers,
  //     authToken: 'itsatoken', // window.localStorage.getItems('authToken')
  // }

  config.headers = Object.assign({}, config.headers, {
    authToken: 'itsatoken'
  })

  return config
})

ajax.interceptors.response.use(res => {
  if (res.data.code === 200) {
    return res.data.data
  } else {
    // 全局处理错误

    message.error('请求错误')
  }
})

export const getArticles = params => {
  return ajax.post('/api/v1/articleList', {
    offset: params.offset,
    limited: params.limited
  })
}

export const getNotifications = params => {
  return ajax.post('/api/v1/notificationList', {})
}
