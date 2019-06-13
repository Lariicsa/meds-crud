import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const config = {
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