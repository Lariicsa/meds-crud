import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
var firebase = require('firebase/app');
import db from './main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    findtext: '',
    user: '',
    usuario: '',
    email:'',
    error:'',
    meds: [],
    med:{
      id: '',
      caducidad: '',
      cantidad: '',
      formule:'',
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
    },
    setUsuario(state, payload) {
      state.usuario = payload
    },
    setError(state, payload){
      state.error = payload
    }
  },
  actions: {
    finder({commit, state}, payload){
      console.log(payload);
      state.findtext = payload.toLowerCase();
    },
    getMeds({commit}){
      const usuario = firebase.auth().currentUser
      const meds = []
      db.collection(usuario.email).get() //reemplazo de 'meds' collection
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
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).doc(id).get()
      .then(documento => {
        let med = documento.data();
        med.id = documento.id
        commit('setMed', med)
      })
    },
    editMed({commit}, med) {
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).doc(med.id).update({
        nombre: med.nombre,
        mg: med.mg,
        cantidad: med.cantidad,
        mod: med.mod,
        caducidad: med.caducidad,
        formule: med.formule
      })
      .then(documento => {
        router.push({name: 'inicio'})
        console.log('updated')
      })
    },
    addMed({commit}, {nombre, mg, cantidad, mod, caducidad, formule}){
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).add({
        nombre:nombre,
        mg:mg,
        cantidad: cantidad,
        mod: mod,
        caducidad: caducidad,
        formule: formule
      })
      .then(document=>{
        router.push({name: 'inicio'})
        console.log('added', document.id)
      })
    },
    deleteMed({commit, dispatch}, id){
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).doc(id).delete()
      .then(()=>{
        commit('deleteMed', id)
        console.log('Deleted', id)
        router.push({name:'inicio'})
      })
    },
    crearUsuario({commit},payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.pass)
      .then(res=>{
        console.log(res.user.email);
        console.log(res.user.uid);
        commit('setUsuario', {email: res.user.email, uid:res.user.uid})
        //crear colección
        db.collection(res.user.email).add({
          nombre:'Tu medicina',
          mg:'miligramos',
          cantidad: '25',
          mod: '10',
          caducidad: '2021-01-01'
        })
        .then(()=>{
          router.push({name:'inicio'})
        })
      })
      .catch(err=>{
        console.log(err.message);
        commit('setError', err.message)
      })
    },
    ingresoUsuario({commit},payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass)
      .then(res=>{
        console.log(res);
        commit('setUsuario', {email: res.user.email, uid:res.user.uid})
        router.push({name:'inicio'})
      })
      .catch(err=>{
        console.log(err.message);
        commit('setError', err.message)
      })
    },
    detectarUsuario({commit}, payload){
      if(payload != null){
        commit('setUsuario', {email: payload.email, uid: payload.uid})
      }else{
        commit('setUsuario', null)
      }
      
    },
    cerrarSesion({commit}){
      firebase.auth().signOut()
      commit('setUsuario', null)
      router.push({name:'ingreso'})
    }
  },//start getters
  getters:{
    existeUsuario(state){
      if(state.usuario === null || state.usuario === '' || state.usuario === undefined ){
        return false
      } else {
        return true
      }
    },
    arrayFiltrado(state){
      let arregloFiltrado = []
      for (let med of state.meds){
        let nombre = med.nombre.toLowerCase();
        if(nombre.indexOf(state.findtext)>=0){
          arregloFiltrado.push(med)
        }
      }
      return arregloFiltrado;
    }
  }
})
