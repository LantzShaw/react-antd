import { Login, Dashboard, Settings, NotFound, ArticleList, ArticleEdit } from '../views'

export const mainRoute = [
    {
        pathname: '/login',
        component: Login,
    },
    {
        pathname: '/404',
        component: NotFound,
    },
]

export const adminRoute = [
    {
        pathname: '/admin/dashboard',
        component: Dashboard,
    },
    {
        pathname: '/admin/article',
        component: ArticleList,
        exact: true,
    },
    {
        pathname: '/admin/article/edit/:id',
        component: ArticleEdit,
    },
    {
        pathname: '/admin/settings',
        component: Settings,
    },
]
