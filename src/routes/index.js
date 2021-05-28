import { Login, Dashboard, Settings, NotFound, ArticleList, ArticleEdit, Notifications } from '../views'

import { DashboardOutlined, ProfileOutlined, SettingOutlined } from '@ant-design/icons'

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
        title: '仪表盘',
        isNav: true,
        icon: DashboardOutlined,
    },
    {
        pathname: '/admin/article',
        component: ArticleList,
        title: '文章管理',
        isNav: true,
        exact: true,
        icon: ProfileOutlined,
    },
    {
        pathname: '/admin/article/edit/:id',
        component: ArticleEdit,
    },
    {
        pathname: '/admin/notification',
        component: Notifications,
    },
    {
        pathname: '/admin/settings',
        component: Settings,
        title: '系统设置',
        isNav: true,
        icon: SettingOutlined,
    },
]
