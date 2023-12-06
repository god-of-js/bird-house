import IndexPage from '~/pages/IndexPage.vue'
import OverviewLayout from '~/layouts/OverviewLayout.vue'
import NotFound from '~/pages/NotFound.vue'

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
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]

export default routes
