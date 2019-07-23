<template>
  <div class="section">
    <h2>Editar</h2>
    
    <form @submit.prevent="editMed(med)">
      <div class="field">
        <label class="label">Nombre</label>
        <input class="input" type="text" v-model="med.nombre">
      </div>
       <div class="field">
        <label class="label">Fórmula</label>
        <input class="input" type="text" v-model="med.formule">
      </div>
      <div class="field">
        <label class="label">Miligramos</label>
        <input class="input" type="number" v-model="med.mg">
      </div>
      <div class="field">
        <label class="label">Cantidad</label>
        <input class="input" type="number" v-model="med.cantidad">
      </div>
      <div class="field">
        <label class="label">Sobran</label>
        <input class="input" type="number" v-model="med.mod">
      </div>
						<div class="field">
        <label class="label">Caducidad</label>
        <input class="input" type="date" v-model="med.caducidad">
      </div>
    <div class="buttons is-right">
					<router-link :to="{name: 'inicio'}">
						<button class="button is-secondary">Cancelar</button>
					</router-link>
					<button class="button is-primary" type="submit">Actualizar</button>
				</div>
      
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Editar",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    ...mapActions(["getMed", "editMed"])
  },
  created() {
    this.getMed(this.id);
  },
  computed: {
    ...mapState(["med"])
  }
};
</script>
