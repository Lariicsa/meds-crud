<template>
  <div id="app" class="container">
    <nav>
      <div v-if="!existeUsuario">
        <router-link :to="{name: 'registro'}">
          <a>Registro</a> |
        </router-link>
        <router-link :to="{name: 'ingreso'}">
          <a>Ingreso</a> |
        </router-link>
      </div>
      <a v-if="existeUsuario" @click="cerrarSesion">Cerrar sesión</a>
    </nav>
    <div class="content">
      <router-link :to="{name: 'inicio'}">
        <h1 class="title is-1">HoMeds</h1>
        <hr>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["cerrarSesion"])
  },
  computed: {
    ...mapGetters(["existeUsuario"])
  }
};
</script>