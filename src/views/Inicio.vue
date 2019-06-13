<template>
  <div class="content">
    <h1>Lista de Medicamentos</h1>
    <p>{{meds}}</p>
    <hr>
    <ul>
      <li v-for="item of meds" :key="item.id">
        <strong>{{item.nombre}}</strong>
        <router-link :to="{name: 'editar', params:{id: item.id}}">
          <button class="button is-secondary">Editar</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Inicio",
  methods: {
    ...mapActions(["getMeds"])
  },
  created() {
    this.getMeds();
  },
  computed: {
    ...mapState(["meds"])
  }
};
</script>
