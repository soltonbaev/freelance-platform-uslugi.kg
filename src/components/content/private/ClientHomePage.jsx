import React from 'react';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';

const ClientHomePage = () => {
   const {user} = useGlobalContext();
   return (
      <div>
         <h1>С возвращением, дорогой {user._delegate.email}</h1>
      </div>
   );
};

export default ClientHomePage;
