export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/addrSearch',
    name: 'addr-search',
    component: () => import('@/views/addrSearchPanel/addrSearch')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import('@/views/login/forget')
  },
  {
    path: '/shopHome',
    name: 'shop-home',
    component: () => import('@/views/shopHome/shopHome')
  }
]
