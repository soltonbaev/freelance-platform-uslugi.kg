import {Button, Grid} from '@mui/material';
import {collection, getDocs, query, where} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../../contexts/GlobalContextProvider';
import {db} from '../../../../helpers/firebase';
const ChatHistory = () => {
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
         <h2>Чаты с продавцами</h2>
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
         <h2>Чаты с покупателями</h2>
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
      </>
   );
};

export default ChatHistory;
