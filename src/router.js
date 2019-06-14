import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
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
    },
    {
      path: '/agregar',
      name: 'agregar',
      component: () => import('./views/Agregar.vue')
    }
  ]
})

export default router;
