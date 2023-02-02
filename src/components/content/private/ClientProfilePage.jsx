import {Button, Paper} from '@mui/material';
import {Container} from '@mui/system';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import fireBase from '../../../helpers/firebase';

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
   const {firstName, lastName, email, city, hourlyWage, aboutMe} = userDetails;

   return (
      <Container maxWidth="md">
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
         </Paper>
      </Container>
   );
};

export default ClientProfilePage;
