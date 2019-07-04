import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var firebase = require("firebase/app");

require("firebase/auth");

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

require("./assets/main.scss");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
