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
      
};

export const createUserProfileDocument = async ( userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
  
    if(!snapShot.exists) {
        
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {

            await userRef.set ({
displayName,
email,
createdAt,
...additionalData
            })
        }catch(error) {
            console.log('error creating user',error.message);
        }

    }
    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
   return await batch.commit();
};
export const convertCollectionsSnapshotToMap = collectionsSnapshot => {

    const transformedCollection = collectionsSnapshot.docs.map( doc => {
        const {title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });    console.log(transformedCollection);

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;

    } , {})

}

firebase.initializeApp(config);
 export const auth = firebase.auth();
 export const firestore = firebase.firestore(); 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase;
