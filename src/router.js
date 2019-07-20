import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        },
        {
          path: '/listar_denuncia',
          name: 'listar_denuncia',
          component: () => import('./views/ListarDenuncia.vue')
        },
        {
          path: 'nova_denuncia',
          name: 'nova_denuncia',
          component: () => import('./views/NovaDenuncia.vue')
        },
        {
          path: '/visaogeral',
          name: 'visaogeral',
          component: () => import('./views/VisaoGeral.vue')
        },
        {
          path: '/todas_obras',
          name: 'todas_obras',
          component: () => import('./views/TodasObras.vue')
        },
        {
          path: '/todas_empresas',
          name: 'todas_empresas',
          component: () => import('./views/TodasEmpresas.vue')
        },
        {
          path: '/estatisticas',
          name: 'estatisticas',
          component: () => import('./views/Estatisticas.vue')
        },
        {
          path: '/sobre',
          name: 'sobre',
          component: () => import('./views/Sobre.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})
