import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyDkr7KPSmoVBXGVxAarfhFTDBeFEllzLlk',
   authDomain: 'uslugi-kg.firebaseapp.com',
   projectId: 'uslugi-kg',
   storageBucket: 'uslugi-kg.appspot.com',
   messagingSenderId: '701136542997',
   appId: '1:701136542997:web:7f4651b8befc966d029d1c',
};

const fireBase = firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(fireBase);

export default fireBase;
