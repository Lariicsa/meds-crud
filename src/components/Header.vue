<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link :to="{name: 'inicio'}" class="navbar-item">
          <h2 class="title is-3">Homeds</h2>
        </router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <strong v-if="existeUsuario" class="navbar-item">{{usuario.email}}</strong>
              <a class="button is-light" v-if="existeUsuario" @click="cerrarSesion">Cerrar sesión</a>
              <router-link v-if="!existeUsuario" :to="{name: 'ingreso'}" class="button is-light">
                <a>Login</a>
              </router-link>
              <router-link v-if="!existeUsuario" :to="{name: 'registro'}" class="button is-primary">
                <strong>Register</strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
	name: 'Header',
	data(){
		return{
			email:'',
			pass: ''
		}
	},
	methods: {
    ...mapActions(["cerrarSesion"])
  },
  computed: {
    ...mapGetters(["existeUsuario"]),
    ...mapState(["usuario", "error"])
  }
}
</script>