import Vue from 'vue'
import Router from 'vue-router'
var firebase = require("firebase/app");

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () => import('./views/Inicio.vue'),
      meta: {requiresAuth: true}
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
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('./views/Registro.vue')
    },
    {
      path: '/ingreso',
      name: 'ingreso',
      component: () => import('./views/Ingreso.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  //parametters from routervue
  const rutaProtegida = (to.matched.some(record => record.meta.requiresAuth));
  var user = firebase.auth().currentUser;

  if(rutaProtegida === true && user === null){
    next({name: 'ingreso'})
  } else {
    next()
  }

})

export default router;
