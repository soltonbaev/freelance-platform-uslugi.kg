import React, {useEffect} from 'react';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';

import ClientHomePage from '../private/ClientHomePage';
import UnauthorizedHomePage from './UnauthorizedHomePage';

const HomePage = () => {
   const {user} = useGlobalContext();
   return <div>{user ? <ClientHomePage /> : <UnauthorizedHomePage />}</div>;
};

export default HomePage;
