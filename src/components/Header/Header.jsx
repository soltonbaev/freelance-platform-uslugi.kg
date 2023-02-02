import React from 'react';
import {useGlobalContext} from '../../contexts/GlobalContextProvider';
import Logo from './Logo';
import Navbar from './Navbar';
import TaskMenu from './TaskMenu';

const Header = () => {
   const {isUserWorker} = useGlobalContext();
   return (
      <>
         <Logo />
         <Navbar />
         {isUserWorker || <TaskMenu />}
      </>
   );
};

export default Header;
