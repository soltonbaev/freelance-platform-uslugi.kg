import React, {createContext, useContext, useEffect, useState} from 'react';
import firebase from '../helpers/firebase';

export const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);

const GlobalContextProvider = ({children}) => {
   let [user, setUser] = useState('');
   let [hasAccount, setHasAccount] = useState('');
   let [isLoggedIn, setIsLoggedIn] = useState(false);
   let [test, setTest] = useState('Hellooooooo!!');

   const authListener = () => {
      firebase.auth().onAuthStateChanged(user => {
         if (user) {
            setUser(user);
            setIsLoggedIn(true);
         } else {
            setUser('');
         }
      });
   };

   useEffect(() => {
      authListener();
   }, []);

   // useEffect(() => {
   //    console.log(user);
   // }, [user]);
   let value = {
      user,
      setUser,
      hasAccount,
      setHasAccount,
      test,
      isLoggedIn,
      setIsLoggedIn,
   };
   return (
      <globalContext.Provider value={value}>{children}</globalContext.Provider>
   );
};

export default GlobalContextProvider;
