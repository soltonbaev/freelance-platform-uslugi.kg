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

   useEffect(() => {
      console.log('profile userDetails', userDetails);
   }, [userDetails]);
   return (
      <div>
         <h1>Мой профиль</h1>
         <ul>
            <li>Name: </li>
            <li>Last Name:</li>
            <li>email: </li>
         </ul>
         <button onClick={handleLogOut}>Выйти из аккаунта</button>
      </div>
   );
};

export default ClientProfilePage;
