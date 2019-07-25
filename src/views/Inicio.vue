<template>
  <div>
    <div class="section">
      <h2 class="title is-4">Current Meds</h2>
      <form @submit.prevent="finder(findtext)">
        <div class="field">
          <input
            class="input"
            type="text"
            v-model="findtext"
            placeholder="Find any medecine"
            v-on:keyup="finder(findtext)"
          >
        </div>
      </form>
      <hr>
      <div class="buttons is-right">
        <router-link :to="{name: 'agregar'}">
          <button class="button is-primary">Agregar</button>
        </router-link>
      </div>
      <div class="table-wrap">
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
              <td class="lasttd">
                <div class="buttons is-centered">
                  <button
                    class="button is-danger is-outlined is-small"
                    @click="deleteMed(item.id)"
                  >Borrar</button>
                  <router-link :to="{name: 'editar', params:{id: item.id}}">
                    <button class="button is-secondary is-small">Editar</button>
                  </router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
  data() {
    return {
      findtext: ""
    };
  },
  methods: {
    ...mapActions(["getMeds", "deleteMed", "finder"])
  },
  created() {
    this.getMeds();
  },
  computed: {
    ...mapState(["usuario", "meds"]),
    ...mapGetters(["arrayFiltrado"])
  }
};
</script>

<style lang="scss">
@import "../assets/main";
@include mobile {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    margin: 0 0 1rem 0;
  }

  tr:nth-child(odd) {
    background: $white-ter;
  }

  td {
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    display: flex;
    padding-right: 1rem;
    font-weight: bold;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0.6rem;
    width: 45%;
    white-space: nowrap;
  }
  td.lasttd > .buttons {
    margin: 0.5rem 0;
  }
  td:nth-of-type(1):before {
    content: "Nombre";
  }
  td:nth-of-type(2):before {
    content: "Fórmula";
  }
  td:nth-of-type(3):before {
    content: "mg";
  }
  td:nth-of-type(4):before {
    content: "Quedan";
  }
  td:nth-of-type(5):before {
    content: "Caducidad";
  }
  .table-wrap {
    max-width: 72rem;
    overflow: scroll;
  }

  //rewrite bulma
  .table td,
  .table th {
    border: 1px solid #dbdbdb;
    border-width: 0 0 1px;
    padding: 0 0 0 50%;
    vertical-align: top;
  }

  .table tbody tr:last-child td {
    border-bottom-width: 0;
  }
}
</style>

