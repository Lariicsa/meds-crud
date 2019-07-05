<template>
  <div>
    {{usuario}}
    <h3>Hola, {{usuario.email}}</h3>
    <nav>
      <router-link :to="{name: 'registro'}">
        <a>Registro</a> |
      </router-link>
      <router-link :to="{name: 'ingreso'}">
        <a>Ingreso</a> |
      </router-link>
        <a @click="cerrarSesion">Cerrar sesión</a>
    </nav>
    <div class="section">
      <h2 class="title is-2">Lista de Medicamentos</h2>
      <hr>
      <div class="buttons is-right">
        <router-link :to="{name: 'agregar'}">
          <button class="button is-primary">Agregar</button>
        </router-link>
      </div>
<!--
      <table class="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>miligramos</th>
            <th>Quedan</th>
            <th>Caducidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of meds" :key="item.id">
            <td>{{item.nombre}}</td>
            <td>{{item.mg}}</td>
            <td>{{item.mod}}</td>
            <td>{{item.expira}}</td>
            <td>
              <div class="buttons is-centered">
                <router-link :to="{name: 'editar', params:{id: item.id}}">
                  <button class="button is-danger is-outlined" @click="deleteMed(item.id)">Borrar</button>
                  <button class="button is-secondary">Editar</button>
                </router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      -->
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
import { mapActions, mapState } from "vuex";
export default {
  name: "Inicio",
  methods: {
    //...mapActions(["getMeds", "deleteMed"])
    ...mapActions(["cerrarSesion", "detectarUsuario"])
  },
  created() {
   // this.getMeds();
  },
  computed: {
   // ...mapState(["meds", "usuario"])
  ...mapState(["usuario"])
  }
};
</script>
