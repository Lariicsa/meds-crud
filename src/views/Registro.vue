<template>
  <div>
    <h1>Registro</h1>
    <div class="section">
      <form class="control" @submit.prevent="crearUsuario({email:email, pass:pass1})">
        <div class="field">
          <label class="label">E-mail</label>
          <input class="input" type="email" v-model="email">
        </div>
        <div class="field">
          <label class="label">Password</label>
          <input class="input" type="password" v-model="pass1">
        </div>
        <div class="field">
          <label class="label">Password</label>
          <input class="input" type="password" v-model="pass2">
        </div>
        <div class="field is-grouped is-grouped-right">
          <p class="control">
            <router-link :to="{name: 'inicio'}">
              <a class="button is-light">Cancelar</a>
            </router-link>
          </p>
          <p class="control">
            <button class="button is-primary" type="submit">Agregar</button>
          </p>
        </div>
      </form>
		<span class="help">{{error}}</span>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
  name: "Registro",
  data() {
    return {
      email: "",
      pass1: "",
      pass2: ""
    };
  },
  methods:{
	  ...mapActions(['crearUsuario'])
  },
  computed:{
	  ...mapState(['error'])
  }
};
</script>
