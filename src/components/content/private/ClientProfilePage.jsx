import React from 'react';
import {useNavigate} from 'react-router-dom';
import fireBase from '../../../helpers/firebase';

const ClientProfilePage = () => {
   const navigate = useNavigate();
   const handleLogOut = () => {
      fireBase.auth().signOut();
      navigate('/');
   };
   return (
      <div>
         <h1>Мой профиль</h1>
         <button onClick={handleLogOut}>Выйти из аккаунта</button>
      </div>
   );
};

export default ClientProfilePage;
