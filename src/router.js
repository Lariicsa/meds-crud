import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () => import('./views/Inicio.vue')
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: () => import('./views/Editar.vue')
    }
  ]
})
