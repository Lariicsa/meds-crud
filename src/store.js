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
      mod: ''
    }
  },
  mutations: {
    setMeds(state, medsfromDb){
      state.meds = medsfromDb
    },
    setMed(state, medfromdb) {
      state.med = medfromdb
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
        nombre: med.nombre
      })
      /*.then(documento => {
        router.push({name: 'inicio'})
      })*/
    }
  }
})
