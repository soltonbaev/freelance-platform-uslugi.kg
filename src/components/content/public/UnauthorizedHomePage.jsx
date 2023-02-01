import React from 'react';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';

const UnauthorizedHomePage = () => {
   const {getServiceCategories} = useGlobalContext();
   return (
      <div>
         <h1>Добро пожаловать, дорогой гость</h1>
      </div>
   );
};

export default UnauthorizedHomePage;
