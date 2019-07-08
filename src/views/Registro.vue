<template>
  <div class="container">
    <h2 class="is-size-3 has-text-centered">Sign up to start your meds stock</h2>
    <div class="column is-4 is-offset-4">
      <div class="box">
        <form class="control" @submit.prevent="crearUsuario({email:email, pass:pass1})">
          <div class="field">
            <label class="label">E-mail</label>
            <input
              class="input"
              type="email"
              v-model.lazy="$v.email.$model"
              :class="$v.email.$error? 'is-danger': ''"
            >
            <p class="help is-danger" v-if="!$v.email.email">Enter a valid e-mail format</p>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <input
              class="input"
              type="password"
              v-model.lazy="$v.pass1.$model"
              :class="$v.pass1.$error? 'is-danger': ''"
            >
            <p class="help is-danger" v-if="!$v.pass1.minLength">Must be at least 6 characters</p>
          </div>
          <div class="field">
            <label class="label">Repeat password</label>
            <input
              class="input"
              type="password"
              v-model.lazy="$v.pass2.$model"
              :class="$v.pass2.$error? 'is-danger': ''"
            >
            <p class="help is-danger" v-if="!$v.pass2.sameAsPassword">Password don't match</p>
          </div>
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <router-link :to="{name: 'inicio'}">
                <a class="button is-light">I already have an account</a>
              </router-link>
            </p>
            <p class="control">
              <button class="button is-primary" type="submit" :disabled="!desactivar">Sign up</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";
export default {
  name: "Registro",
  data() {
    return {
      email: "",
      pass1: "",
      pass2: ""
    };
  },
  methods: {
    ...mapActions(["crearUsuario"])
  },
  computed: {
    ...mapState(["error"]),
    desactivar() {
      return this.pass1 === this.pass2 && this.pass1 != "" && this.email != "";
    }
  },
  validations: {
    email: { required, email },
    pass1: {
      required,
      minLength: minLength(6)
    },
    pass2: {
      sameAsPassword: sameAs("pass1")
    }
  }
};
</script>
