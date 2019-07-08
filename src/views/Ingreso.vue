<template>
  <div class="container">
    <h2
      class="is-size-3 has-text-centered"
    >Accede a tu cuenta</h2>
    <div class="column is-4 is-offset-4">
      <div class="box">
        <form class="control" @submit.prevent="ingresoUsuario({email:email, pass:pass})">
          <div class="field">
            <label class="label">E-mail</label>
            <input class="input" type="email" v-model="email">
          </div>
          <div class="field">
            <label class="label">Password</label>
            <input class="input" type="password" v-model="pass">
          </div>
          <div class="field is-groupe">
            <p class="control">
              <button class="button is-medium is-primary is-fullwidth" type="submit">Ingresar</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Ingreso",
  data() {
    return {
      email: "",
      pass: ""
    };
  },
  methods: {
    ...mapActions(["ingresoUsuario"])
  },
  computed: {
    ...mapState(["error"])
  }
};
</script>