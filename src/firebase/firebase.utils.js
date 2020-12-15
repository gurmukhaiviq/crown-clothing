import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
    apiKey: "AIzaSyCehmSALbP6LvoFDjxza3smZuJ3xZGoXoc",
    authDomain: "crwn-db-db3fc.firebaseapp.com",
    projectId: "crwn-db-db3fc",
    storageBucket: "crwn-db-db3fc.appspot.com",
    messagingSenderId: "627923636508",
    appId: "1:627923636508:web:7411d17b21416e91132ad9",
    measurementId: "G-NW4S3470KZ"
      
}
firebase.initializeApp(config);
 export const auth = firebase.auth();
 export const firestore = firebase.firestore(); 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase;
