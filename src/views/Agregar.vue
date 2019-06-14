<template>
  <div>
    <h1>Agregar</h1>
    <div class="section">
      <form class="control" @submit.prevent="addMed({nombre, mg, cantidad, mod, caducidad})">
        <div class="field">
          <label class="label">Nombre</label>
          <input class="input" type="text" v-model="nombre">
        </div>
        <div class="field">
          <label class="label">Miligramos</label>
          <input class="input" type="number" v-model="mg">
        </div>
        <div class="field">
          <label class="label">Cantidad</label>
          <input class="input" type="number" v-model="cantidad">
        </div>
        <div class="field">
          <label class="label">Sobran</label>
          <input class="input" type="number" v-model="mod">
        </div>
								<div class="field">
          <label class="label">Expira</label>
          <input class="input" type="date" v-model="caducidad">
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
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Agregar",
  data() {
    return {
					nombre: '',
						mg: '',
						cantidad: '',
						mod: '',
						caducidad: ''
    };
  },
  methods: {
    ...mapActions(["addMed"])
  }
};
</script>