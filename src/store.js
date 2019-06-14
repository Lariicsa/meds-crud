import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meds: [],
    med:{
      id: '',
      caducidad: '',
      cantidad: '',
      mg: '',
      nombre: '',
      mod: '',
    }
  },
  mutations: {
    setMeds(state, medsfromDb){
      state.meds = medsfromDb
    },
    setMed(state, medfromdb) {
      state.med = medfromdb
    },
    deleteMed(state, id) {
      state.meds = state.meds.filter( documento=>{
        return documento.id != id
      })
    }
  },
  actions: {
    getMeds({commit}){
      const meds = []
      db.collection('meds').get()
      .then(snapshot => {
        snapshot.forEach(doc =>{
          let med = doc.data();
          med.id = doc.id
          meds.push(med)
        })
        commit('setMeds', meds)
      })
    },
    getMed({commit}, id) {
      db.collection('meds').doc(id).get()
      .then(documento => {
        let med = documento.data();
        med.id = documento.id
        commit('setMed', med)
      })
    },
    editMed({commit}, med) {
      db.collection('meds').doc(med.id).update({
        nombre: med.nombre,
        mg: med.mg,
        cantidad: med.cantidad,
        mod: med.mod,
        caducidad: med.caducidad
      })
      .then(documento => {
        router.push({name: 'inicio'})
        console.log('updated')
      })
    },
    addMed({commit}, {nombre, mg, cantidad, mod, caducidad}){
      db.collection('meds').add({
        nombre:nombre,
        mg:mg,
        cantidad: cantidad,
        mod: mod,
        caducidad: caducidad
      })
      .then(document=>{
        router.push({name: 'inicio'})
        console.log('added', document.id)
      })
    },
    deleteMed({commit, dispatch}, id){
      db.collection('meds').doc(id).delete()
      .then(()=>{
        console.log('Deleted', id)
        commit('deleteMed', id)
      })
    }
  }
})
