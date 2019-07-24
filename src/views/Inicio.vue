<template>
  <div>
    <div class="section">
      <h2 class="title is-4">Current Meds</h2>
      <form @submit.prevent="finder(findtext)">
        <div class="field">
        <input class="input" type="text" v-model="findtext" placeholder="Find any medecine" v-on:keyup="finder(findtext)">
      </div>
      </form>
      <hr>
      <div class="buttons is-right">
        <router-link :to="{name: 'agregar'}">
          <button class="button is-primary">Agregar</button>
        </router-link>
      </div>
      <table class="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fórmula</th>
            <th>miligramos</th>
            <th>Quedan</th>
            <th>Caducidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of arrayFiltrado" :key="item.id">
            <td>{{item.nombre}}</td>
            <td>{{item.formule}}</td>
            <td>{{item.mg}}</td>
            <td>{{item.mod}}</td>
            <td>{{item.caducidad}}</td>
            <td>
              <div class="buttons is-centered">
                <button class="button is-danger is-outlined" @click="deleteMed(item.id)">Borrar</button>
                <router-link :to="{name: 'editar', params:{id: item.id}}">
                  <button class="button is-secondary">Editar</button>
                </router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      
      <hr>
      <div class="buttons is-right">
        <router-link :to="{name: 'agregar'}">
          <button class="button is-primary">Agregar</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "Inicio",
  data(){
    return{
      findtext: ''
    };
  },
  methods: {
    ...mapActions(["getMeds", "deleteMed", "finder"])
  },
  created() {
   this.getMeds()
  },
  computed: {
  ...mapState(["usuario", "meds"]),
  ...mapGetters(['arrayFiltrado'])
  }
}
</script>
