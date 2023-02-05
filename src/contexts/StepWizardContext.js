import {doc, getDoc} from 'firebase/firestore';
import React, {createContext, useContext, useEffect, useState} from 'react';
import fireBase, {db} from '../helpers/firebase';
import {useGlobalContext} from './GlobalContextProvider';
import {collection, addDoc} from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';

export const stepWizardContext = createContext();
export const useStepWizardContext = () => useContext(stepWizardContext);

const StepWizardContextProvider = ({children}) => {
   const navigate = useNavigate();
   const [buyerId, setBuyerId] = useState('');
   const [sellerId, setSellerId] = useState('');
   const [time, setTime] = useState('');
   const [date, setDate] = useState('');
   const [city, setCity] = useState('Выбрать город');
   const [taskLength, setTaskLength] = useState('');
   const [taskDesc, setTaskDesc] = useState('');
   const [workerObj, setWorkerObj] = useState('');
   const [isWizardInProgress, setIsWizardInProgress] = useState(false);
   const {userDetails, setTaskUid, service} = useGlobalContext();

   async function createTask() {
      const taskObj = {
         buyerUid: userDetails.uid,
         buyerInfo: [
            userDetails.firstName,
            userDetails.lastName,
            userDetails.email,
         ],
         sellerUid: workerObj.uid,
         sellerInfo: [workerObj.firstName, workerObj.lastName, workerObj.email],
         scheduledTimeAndDate: time,
         isCompleted: false,
         timeStamp: Date.now(),
         taskDesc: taskDesc,
         taskLength: taskLength,
      };
      console.log('taskObj', taskObj);
      const docRef = await addDoc(collection(db, 'tasks'), taskObj);
      console.log('Task added with  ID: ', docRef.id);
      setTaskUid(docRef.id);
      const colRef = collection(docRef, 'messages');
      const col = await addDoc(colRef, {col: 'messages'});
      console.log('Collection added with  ID: ', col.id);
      navigate('/chat');
   }

   let value = {
      buyerId,
      sellerId,
      time,
      setTime,
      date,
      city,
      taskLength,
      setTaskLength,
      setCity,
      createTask,
      taskDesc,
      setTaskDesc,
      workerObj,
      setWorkerObj,
      isWizardInProgress,
      setIsWizardInProgress,
      createTask,
   };
   return (
      <stepWizardContext.Provider value={value}>
         {children}
      </stepWizardContext.Provider>
   );
};

export default StepWizardContextProvider;
