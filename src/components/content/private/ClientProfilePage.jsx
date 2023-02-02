import {Button} from '@mui/material';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import fireBase from '../../../helpers/firebase';

const ClientProfilePage = () => {
   const {userDetails, isUserWorker, setIsUserWorker} = useGlobalContext();
   const navigate = useNavigate();
   const handleLogOut = () => {
      fireBase.auth().signOut();
      navigate('/');
   };
   const {firstName, lastName, email, city, hourlyWage, aboutMe} = userDetails;

   return (
      <div>
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
               onClick={() => {
                  setIsUserWorker(false);
               }}
            >
               Переключится в режим клиента
            </Button>
         ) : (
            <Button
               onClick={() => {
                  setIsUserWorker(true);
               }}
            >
               Переключится в режим помощника
            </Button>
         )}
         <button onClick={handleLogOut}>Выйти из аккаунта</button>
      </div>
   );
};

export default ClientProfilePage;
