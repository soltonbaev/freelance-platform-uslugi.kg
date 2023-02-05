import React, {useEffect} from 'react';
import {useGlobalContext} from '../../contexts/GlobalContextProvider';
import {ConsoleGroup, ConsoleGroupEnd} from '../../helpers/console';
import Logo from './Logo';
import Navbar from './Navbar';
import TaskMenu from './TaskMenu';

const Header = () => {
   useEffect(() => {
      ConsoleGroup('Spawning Header...');
      return () => {
         ConsoleGroupEnd('Ending Header...');
      };
   }, []);

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
