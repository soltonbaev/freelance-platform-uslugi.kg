import noImagePlaceholder from '../../src/no-image-placeholder.png';
import {
   doc,
   getDoc,
   getDocs,
   collection,
   query,
   where,
   setDoc,
   updateDoc,
} from 'firebase/firestore';
import React, {createContext, useContext, useEffect, useState} from 'react';
import fireBase, {db} from '../helpers/firebase';
import {Console, ConsoleGroup, ConsoleGroupEnd} from '../helpers/console';
export const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);

const GlobalContextProvider = ({children}) => {
   let [user, setUser] = useState('');
   let [hasAccount, setHasAccount] = useState('');
   let [isLoggedIn, setIsLoggedIn] = useState(false);
   let [userDetails, setUserDetails] = useState({});
   let [isUserWorker, setIsUserWorker] = useState(false);
   let [category, setCategory] = useState('');
   let [usersByQuery, setUsersByQuery] = useState([]);
   let [taskUid, setTaskUid] = useState('');
   let [isChatActive, setIsChatActive] = useState(false);
   let [usersByType, setUsersByType] = useState([]);
   let [firstName, setFirstName] = useState('');
   let [lastName, setLastName] = useState('');
   let [photoUrl, setPhotoUrl] = useState('');
   let [hourlyWage, setHourlyWage] = useState('');
   let [categoriesArr, setCategoriesArr] = useState([]);
   let [servicesArr, setServicesArr] = useState([]);
   let [service, setService] = useState([]);
   let [city, setCity] = useState('');
   let [aboutMe, setAboutMe] = useState('');
   let [chatWithUser, setChatWithUser] = useState("");
   let [tasksCount, setTasksCount] = useState('');
   const cities = ['Бишкек', 'Ош', 'Джалал-Абад', 'Баткен', 'Чолпон-Ата'];

   useEffect(() => {
      ConsoleGroup('Spawning GlobalContextProvider...');
      getServices();
      getCategoriesServices();
      Console('photoUrl', photoUrl);
      Console('category', category);
   }, []);

   useEffect(() => {
      Console('Category state changaed to:', category);
   }, [category]);

   async function getUsersByQuery(queryTypeObj) {
      const arr = [];
      let q;
      if (queryTypeObj.isUserWorker && queryTypeObj.city) {
         q = query(
            collection(db, 'userData'),
            where('isUserWorker', '==', queryTypeObj.isUserWorker),
            where('city', '==', queryTypeObj.city)
         );
      } else if (queryTypeObj.uid) {
         q = query(
            collection(db, 'userData'),
            where('uid', '==', queryTypeObj.uid)
         );
      }

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
         arr.push(doc.data());
      });
      setUsersByQuery(arr);
      return arr;
   }
   // -------
   async function getUsersByType(workerQuery) {
      const arr = [];
      const q = query(
         collection(db, 'userData'),
         where('isUserWorker', '==', workerQuery)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
         arr.push(doc.data());
      });
      setUsersByType(arr);
   }

   async function getCategoriesServices() {
      const arr = [];
      async function getData() {
         const querySnapshot = await getDocs(
            collection(db, 'admin', 'servicesData', 'categories')
         );

         querySnapshot.forEach(doc => {
            arr.push({id: doc.id, ...doc.data()});
         });
      }
      await getData();
      setCategoriesArr(arr);
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
      setServicesArr(arr);
   }

   function setUserDefaults() {
      setCategory(userDetails.category);
      setFirstName(userDetails.firstName);
      setLastName(userDetails.lastName);
      setPhotoUrl(userDetails.photoUrl);
      setHourlyWage(userDetails.hourlyWage);
      setCity(userDetails.city);
      setAboutMe(userDetails.aboutMe);
      setTasksCount(userDetails.tasksCompleted);
      setIsUserWorker(userDetails.isUserWorker);
   }

   useEffect(() => {
      setUserDefaults();
   }, [userDetails]);
   const authListener = () => {
      fireBase.auth().onAuthStateChanged(async user => {
         if (user) {
            setUser(user);
            console.log('authListener User', user);
            async function getFromDb() {
               const docRef = doc(db, 'userData', user.uid);
               const docSnap = await getDoc(docRef);
               if (docSnap.exists()) {
                  let docSnapData = docSnap.data();
                  setUserDetails(docSnapData);
               } else {
                  console.log('No such document!');
               }
            }
            await getFromDb();
         } else {
            setUser('');
         }
      });
   };

   async function updateCurrentUser() {
      const userObj = {
         firstName: firstName,
         lastName: lastName,
         imgUrl: photoUrl,
         isUserWorker: isUserWorker,
         city: city,
      };
      if (isUserWorker) {
         userObj.category = category;
         userObj.hourlyWage = hourlyWage;
         userObj.aboutMe = aboutMe;
      }

      const docRef = doc(db, 'userData', userDetails.uid);

      updateDoc(docRef, userObj)
         .then(docRef => {
            getFromDb();
            console.log(
               'A New Document Field has been added to an existing document'
            );
         })
         .catch(error => {
            console.log(error);
         });
      async function getFromDb() {
         const docRef = doc(db, 'userData', userDetails.uid);
         const docSnap = await getDoc(docRef);
         if (docSnap.exists()) {
            setUserDetails(docSnap.data());
         } else {
            console.log('No such document!');
         }
      }
   }

   async function updateUser(uid, options) {
      const docRef = doc(db, 'userData', uid);
      updateDoc(docRef, options)
         .then(docRef => {
            console.log(`user ${uid} updated`);
         })
         .catch(error => {
            console.log(error);
         });
   }

   async function setTaskCompleted(taskUid) {
      const docRef = doc(db, 'tasks', taskUid);
      updateDoc(docRef, {isCompleted: true})
         .then(docRef => {
            console.log('Task marked as completed');
         })
         .catch(error => {
            console.log(error);
         });
   }
   useEffect(() => {
      authListener();
   }, []);

   let value = {
      category,
      user,
      setUser,
      hasAccount,
      setHasAccount,
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
      taskUid,
      setTaskUid,
      isChatActive,
      setIsChatActive,
      usersByType,
      setUsersByType,
      getUsersByType,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      photoUrl,
      setPhotoUrl,
      hourlyWage,
      setHourlyWage,
      updateCurrentUser,
      city,
      setCity,
      aboutMe,
      setAboutMe,
      setTaskCompleted,
      setChatWithUser,
      chatWithUser,
      service,
      setService,
      updateUser,
      tasksCount,
   };
   return (
      <globalContext.Provider value={value}>{children}</globalContext.Provider>
   );
};

export default GlobalContextProvider;
