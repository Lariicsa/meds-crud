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
      component: () => import(/* webpackChunkName: "inicio" */ './views/Inicio.vue')
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: () => import(/* webpackChunkName: "Edit" */ './views/Editar.vue')
    },
    {
      path: '/agregar',
      name: 'agregar',
      component: () => import(/* webpackChunkName: "Add" */ './views/Agregar.vue')
    }
  ]
})
