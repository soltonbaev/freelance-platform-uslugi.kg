import {Button, Grid} from '@mui/material';
import {collection, getDocs, query, where} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import {db} from '../../../helpers/firebase';
const MyTasks = () => {
   const {userDetails, user, setTaskUid, getUserByUid} = useGlobalContext();
   const [chatsWithSellers, setChatsWithSellers] = useState([]);
   const [chatsWithBuyers, setChatsWithBuyers] = useState([]);
   const navigate = useNavigate();
   useEffect(() => {
      console.log('userDetails', userDetails);
      getChatsWithBuyers(user);
      getChatsWithSellers(user);
   }, []);

   async function getChatsWithBuyers(user) {
      console.log('current chat userid', user);
      const arr = [];
      const q = query(
         collection(db, 'tasks'),
         where('buyerUid', '==', user.uid)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
         arr.push([doc.id, doc.data()]);
      });
      setChatsWithBuyers(arr);
   }
   async function getChatsWithSellers(user) {
      console.log('current chat userid', user);
      const arr = [];
      const q = query(
         collection(db, 'tasks'),
         where('sellerUid', '==', user.uid)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
         arr.push([doc.id, doc.data()]);
      });
      setChatsWithSellers(arr);
   }
   return (
      <>
         {userDetails.isUserWorker ? (
            <h1> История предоставленных услуг</h1>
         ) : (
            <h1>История купленных услуг</h1>
         )}
         {userDetails.isUserWorker ? (
            <Grid
               container
               spacing={2}
               direction="column"
               alignItems="center"
               justifyContent="center"
            >
               {chatsWithSellers.map(chat => {
                  console.log(chat);
                  return (
                     <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                     >
                        <Grid item>
                           {chat[1].buyerInfo[0]}
                           {chat[1].buyerInfo[1]}
                        </Grid>
                        <Grid item>{chat[0]}</Grid>
                        <Grid item>{chat[1].taskDesc}</Grid>
                        <Grid item>
                           <Button
                              onClick={() => {
                                 setTaskUid(chat[0]);
                                 navigate('/chat');
                              }}
                              variant="outlined"
                           >
                              Чат
                           </Button>
                        </Grid>
                     </Grid>
                  );
               })}
            </Grid>
         ) : (
            <Grid
               container
               spacing={2}
               direction="column"
               alignItems="center"
               justifyContent="center"
            >
               {chatsWithBuyers.map(chat => {
                  console.log(chat);
                  return (
                     <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                     >
                        <Grid item>
                           {chat[1].sellerInfo[0]}
                           {chat[1].sellerInfo[1]}
                        </Grid>
                        <Grid item>{chat[0]}</Grid>
                        <Grid item>{chat[1].taskDesc}</Grid>
                        <Grid item>
                           <Button
                              onClick={() => {
                                 setTaskUid(chat[0]);
                                 navigate('/chat');
                              }}
                              variant="outlined"
                           >
                              Чат
                           </Button>
                        </Grid>
                     </Grid>
                  );
               })}
            </Grid>
         )}
      </>
   );
};

export default MyTasks;
