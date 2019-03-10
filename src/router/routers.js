export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/addrSearch',
    name: 'addr-search',
    component: () => import('@/components/addrSearchPanel/addrSearch')
  }
]
