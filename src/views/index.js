import Loadable from 'react-loadable'
// import Loadable from '../components/Loadable'
import { Loading } from '../components'

// 导出方式1
// export { default as Login } from './Login'
// export { default as Dashboard } from './Dashboard'
// export { default as NotFound } from './NotFound'
// export { default as ArticleList } from './Article'
// export { default as ArticleEdit } from './Article/ArticleEdit'
// export { default as Settings } from './Settings'

// 导出方式2
// import Login from './Login'
// import Dashboard from './Dashboard'
// import Settings from './Settings'
// import NotFound from './NotFound'
// import Article from './Article'
// import Edit from './Edit'

// export { Login, Dashboard, Settings, NotFound, Article, Edit }

// 路由懒加载
const Dashboard = Loadable({
  loader: () => import('./Dashboard'),
  loading: Loading
})

const Settings = Loadable({
  loader: () => import('./Settings'),
  loading: Loading
})

const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading
})

const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading
})

const ArticleList = Loadable({
  loader: () => import('./Article'),
  loading: Loading
})

const ArticleEdit = Loadable({
  loader: () => import('./Article/ArticleEdit'),
  loading: Loading
})

const Notifications = Loadable({
  loader: () => import('./Notifications'),
  loading: Loading
})

export { Login, Dashboard, Settings, NotFound, ArticleList, ArticleEdit, Notifications }
