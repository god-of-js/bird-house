import IndexPage from '~/pages/IndexPage.vue'
import OverviewLayout from '~/layouts/OverviewLayout.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
  },
  {
    path: '/overview',
    component: OverviewLayout,
    children: [
      { path: '', component: () => import('~/pages/overview/index.vue') },
      { path: ':id', component: () => import('~/pages/overview/[id].vue') },
    ],
  },
]

export default routes
