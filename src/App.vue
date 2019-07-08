<template>
  <div id="app" class="container">
    <Header/>
    <hr>
    <section>
      <router-view/>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import Header from './components/Header';
export default {
  name: "App",
  components:{
    Header
  },
  methods: {
    ...mapActions(["cerrarSesion"])
  },
  computed: {
    ...mapGetters(["existeUsuario"]),
    ...mapState(["usuario"])
  }
};
</script>

<style>
@import "./scss/shared.scss";
</style>
