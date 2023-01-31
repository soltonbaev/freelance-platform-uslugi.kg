import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import fireBase from '../../../helpers/firebase';

const ClientProfilePage = () => {
   const {user, userDetails} = useGlobalContext();
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
      isUserWorker,
   } = userDetails;
   useEffect(() => {
      console.log('profile userDetails', userDetails);
   }, [userDetails]);
   return (
      <div>
         <h1>Мой профиль</h1>
         <ul>
            <li>Имя: {firstName}</li>
            <li>Фамилия:{lastName}</li>
            <li>Адрес почты: {email}</li>
            <li> Город: {city}</li>
            {isUserWorker && <li>Почасовая оплата   {hourlyWage}  сом</li>}
            <li>Обо мне: {aboutMe}</li>
            <li>Мой рейтинг</li>
            <li> Мои отзывы</li>
         </ul>
         <button onClick={handleLogOut}>Выйти из аккаунта</button>
      </div>
   );
};

export default ClientProfilePage;
