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
  }
]
