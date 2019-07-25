import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");
require("./assets/main.scss");

var config = {
  apiKey: "AIzaSyClQbJJ_LCOdvwYr2pT3sXOSL8agGHsLTE",
  authDomain: "homeds307.firebaseapp.com",
  databaseURL: "https://homeds307.firebaseio.com",
  projectId: "homeds307",
  storageBucket: "",
  messagingSenderId: "317540930398",
  appId: "1:317540930398:web:c1d873bb289170e2"
};

const firebaseApp = firebase.initializeApp(config);

//firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user=>{
  if(user){
    store.dispatch('detectarUsuario', {email: user.email, uid: user.uid})
  }else{
    store.dispatch('detectarUsuario', null)
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
}))
