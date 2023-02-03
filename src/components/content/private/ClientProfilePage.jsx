import {Button, Paper} from '@mui/material';
import {Container} from '@mui/system';
import {deleteDoc, doc} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import fireBase from '../../../helpers/firebase';
import WarningModal from '../public/WarningModal';
import {db} from '../../../helpers/firebase';

const ClientProfilePage = () => {
   const {
      setUser,
      userDetails,
      isUserWorker,
      setIsUserWorker,
   } = useGlobalContext();
   const navigate = useNavigate();
   const handleLogOut = () => {
      fireBase.auth().signOut();
      navigate('/');
   };
   const {
      firstName,
      lastName,
      email,
      city,
      hourlyWage,
      aboutMe,
      uid,
   } = userDetails;
   const [open, setOpen] = useState(false);
   async function deleteAccount() {
      const user = fireBase.auth().currentUser;
      user
         .delete()
         .then(function() {
            console.log('user deleted successfully');
            deleteDoc(doc(db, 'userData', uid));
            handleLogOut();
         })
         .catch(function(error) {
            console.log('delete error');
         });
   }

   return (
      <Container maxWidth="md">
         {open && (
            <WarningModal
               setOpen={setOpen}
               title={'Вы действительно хотите удалить свой аккаунт?'}
               body={'Все данные будут удалены безвовратно'}
               action={deleteAccount}
               open={open}
            />
         )}
         <Paper
            elevation={5}
            sx={{height: '50vh', padding: '1rem', margin: '2rem'}}
         >
            <h1>Мой профиль</h1>
            <ul>
               <li>Имя: {firstName}</li>
               <li>Фамилия:{lastName}</li>
               <li>Адрес почты: {email}</li>
               <li> Город: {city}</li>
               {isUserWorker && (
                  <>
                     <li>Почасовая оплата   {hourlyWage}  сом</li>
                     <li>Обо мне: {aboutMe}</li>
                     <li>Мой рейтинг</li>
                     <li> Мои отзывы</li>
                  </>
               )}
            </ul>
            {isUserWorker ? (
               <Button
                  variant="outlined"
                  sx={{margin: '1rem'}}
                  onClick={() => {
                     setIsUserWorker(false);
                  }}
               >
                  Включить режим клиента
               </Button>
            ) : (
               <Button
                  sx={{margin: '1rem'}}
                  variant="outlined"
                  onClick={() => {
                     setIsUserWorker(true);
                  }}
               >
                  Включить режим помощника
               </Button>
            )}
            <Button
               sx={{margin: '1rem'}}
               variant="contained"
               onClick={() => {
                  handleLogOut();
                  setIsUserWorker(false);
                  setUser('');
               }}
            >
               Выйти из аккаунта
            </Button>
            <Button
               sx={{margin: '1rem'}}
               variant="contained"
               onClick={() => {
                  setOpen(true);
               }}
            >
               Удалить аккаунт
            </Button>
         </Paper>
      </Container>
   );
};

export default ClientProfilePage;
