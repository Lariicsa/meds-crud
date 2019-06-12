import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const config = {
	apiKey: "AIzaSyB5qa-LQZ9j0spOAdietIJWFeZGWymIjv8",
	authDomain: "crud-udemy-92b9e.firebaseapp.com",
	databaseURL: "https://crud-udemy-92b9e.firebaseio.com",
	projectId: "crud-udemy-92b9e",
	storageBucket: "crud-udemy-92b9e.appspot.com",
	messagingSenderId: "520420046469",
	appId: "1:520420046469:web:03f4de33681a1dda"
};
const firebaseApp = firebase.initializeApp(config);

//firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()