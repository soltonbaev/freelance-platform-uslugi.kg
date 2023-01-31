import {doc, getDoc} from 'firebase/firestore';
import React, {createContext, useContext, useEffect, useState} from 'react';
import fireBase, {db} from '../helpers/firebase';

export const stepWizardContext = createContext();
export const useStepWizardContext = () => useContext(stepWizardContext);

const StepWizardContextProvider = ({children}) => {
   const [buyerId, setBuyerId] = useState('');
   const [sellerId, setSellerId] = useState('');
   const [time, setTime] = useState('');
   const [date, setDate] = useState('');

   const taskObj = {
      buyerId: buyerId,
      sellerId: sellerId,
      scheduledTime: time,
      scheduledDate: date,
      isCompleted: false,
      timeStamp: Date.now(),
      messages: [],
   };

   function createTask() {}

   let value = {
      buyerId,
      sellerId,
      time,
      date,
      createTask,
   };
   return (
      <stepWizardContext.Provider value={value}>
         {children}
      </stepWizardContext.Provider>
   );
};

export default StepWizardContextProvider;
