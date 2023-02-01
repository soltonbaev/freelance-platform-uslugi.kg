import {
   doc,
   getDoc,
   getDocs,
   collection,
   query,
   where,
} from 'firebase/firestore';
import React, {createContext, useContext, useEffect, useState} from 'react';
import fireBase, {db} from '../helpers/firebase';

export const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);

const GlobalContextProvider = ({children}) => {
   const services = [
      {
         title: 'Moving Services',
         link: '#',
         imgUrl:
            'https://www.bostonmagazine.com/wp-content/uploads/sites/2/2019/06/moving-season-guide.jpg',
         subServices: [
            {name: 'Help Moving', link: '#', id: 1},
            {name: 'Heavy Lifting', link: '#', id: 2},
            {name: 'Furniture Movers', link: '#', id: 3},
            {name: 'Full Service Help Moving', link: '#', id: 4},
         ],
      },
   ];
   let [user, setUser] = useState('');
   let [hasAccount, setHasAccount] = useState('');
   let [isLoggedIn, setIsLoggedIn] = useState(false);
   let [userDetails, setUserDetails] = useState({});
   let [test, setTest] = useState('Hellooooooo!!');
   let [isUserWorker, setIsUserWorker] = useState(false);
   let [category, setCategory] = useState('Выбрать категорию');
   let [usersByQuery, setUsersByQuery] = useState([]);
   const cities = ['Бишкек', 'Ош', 'Джалал-Абад', 'Баткен', 'Чолпон-Ата'];

   let [categoriesArr, setCategoriesArr] = useState([]);
   let [servicesArr, setServicesArr] = useState([]);
   // let categoriesArr = getCategoriesServices();
   // let servicesArr = getServices();

   // useEffect(() => {
   //    getCategoriesServices();
   //    getServices();
   // }, []);

   async function getUsersByQuery(workerQuery, cityQuery) {
      const arr = [];
      const q = query(
         collection(db, 'userData'),
         where('isUserWorker', '==', workerQuery)
         // where('city', '==', cityQuery)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
         arr.push(doc.data());
      });
      setUsersByQuery(arr);
   }

   async function getCategoriesServices() {
      const arr = [];
      async function getData() {
         const querySnapshot = await getDocs(
            collection(db, 'admin', 'servicesData', 'categories')
         );

         querySnapshot.forEach(doc => {
            console.log(doc.data());
            arr.push({id: doc.id, ...doc.data()});
         });
      }
      await getData();
      setCategoriesArr(arr);
      // return arr;
   }

   async function getServices() {
      const arr = [];
      async function getData() {
         const querySnapshot = await getDocs(
            collection(db, 'admin', 'servicesData', 'services')
         );
         querySnapshot.forEach(doc => {
            arr.push(doc.data());
         });
      }
      await getData();
      // return arr;
      // setServicesArr(arr);
   }

   const authListener = () => {
      fireBase.auth().onAuthStateChanged(user => {
         if (user) {
            setUser(user);
            async function getFromDb() {
               const docRef = doc(db, 'userData', user.uid);
               // console.log('uid', user.uid);
               const docSnap = await getDoc(docRef);
               if (docSnap.exists()) {
                  let docSnapData = docSnap.data();
                  console.log(docSnapData);
                  setUserDetails(docSnapData);
               } else {
                  // doc.data() will be undefined in this case
                  console.log('No such document!');
               }
            }
            getFromDb();
         } else {
            setUser('');
         }
      });
   };

   useEffect(() => {
      authListener();
      console.log('userDetails', userDetails.email);
   }, []);

   // useEffect(() => {
   //    console.log(user);
   // }, [user]);
   let value = {
      services,
      user,
      setUser,
      hasAccount,
      setHasAccount,
      test,
      isLoggedIn,
      setIsLoggedIn,
      userDetails,
      setUserDetails,
      isUserWorker,
      setIsUserWorker,
      categoriesArr,
      servicesArr,
      getCategoriesServices,
      getServices,
      setCategory,
      category,
      cities,
      usersByQuery,
      setUsersByQuery,
      getUsersByQuery,
   };
   return (
      <globalContext.Provider value={value}>{children}</globalContext.Provider>
   );
};

export default GlobalContextProvider;
