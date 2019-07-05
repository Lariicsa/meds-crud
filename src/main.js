import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var firebase = require("firebase/app");

require("firebase/auth");
//require("firebase/firestore");

const config = {
  apiKey: "AIzaSyClQbJJ_LCOdvwYr2pT3sXOSL8agGHsLTE",
  authDomain: "homeds307.firebaseapp.com",
  databaseURL: "https://homeds307.firebaseio.com",
  projectId: "homeds307",
  storageBucket: "",
  messagingSenderId: "317540930398",
  appId: "1:317540930398:web:c1d873bb289170e2"
};
firebase.initializeApp(config);

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user)=>{
  console.log(user);
  if(user){
    store.dispatch('detectarUsuario', {email: user.email, uid: user.uid})
  }else{
    store.dispatch('detectarUsuario', null)
  }

  new Vue({ //detected in session
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
})
require("./assets/main.scss");
