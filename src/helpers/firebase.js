// // Import the functions you need from the SDKs you need
// import {initializeApp} from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//    apiKey: 'AIzaSyDkr7KPSmoVBXGVxAarfhFTDBeFEllzLlk',
//    authDomain: 'uslugi-kg.firebaseapp.com',
//    projectId: 'uslugi-kg',
//    storageBucket: 'uslugi-kg.appspot.com',
//    messagingSenderId: '701136542997',
//    appId: '1:701136542997:web:7f4651b8befc966d029d1c',
// };

// // Initialize Firebase
// const firebase = initializeApp(firebaseConfig);

// export default firebase;

import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyDkr7KPSmoVBXGVxAarfhFTDBeFEllzLlk',
   authDomain: 'uslugi-kg.firebaseapp.com',
   projectId: 'uslugi-kg',
   storageBucket: 'uslugi-kg.appspot.com',
   messagingSenderId: '701136542997',
   appId: '1:701136542997:web:7f4651b8befc966d029d1c',
};

const fireBase = firebase.initializeApp(firebaseConfig);

export default fireBase;
