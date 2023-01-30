import React, {createContext, useContext, useEffect, useState} from 'react';
import firebase from '../helpers/firebase';

const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);

const GlobalContextProvider = ({children}) => {
   let [user, setUser] = useState('');
   let [hasAccount, setHasAccount] = useState('');
   let value = {
      user,
      setUser,
      hasAccount,
      setHasAccount,
   };

   const authListener = () => {
      firebase.auth().onAuthStateChanged(user => {
         if (user) {
            setUser(user);
         } else {
            setUser('');
         }
      });
   };

   useEffect(() => {
      authListener();
   }, []);

   return (
      <globalContext.Provider value={value}>{children}</globalContext.Provider>
   );
};

export default GlobalContextProvider;
