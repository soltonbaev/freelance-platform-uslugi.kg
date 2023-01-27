import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import TaskMenu from './TaskMenu';

const Header = () => {
   return (
      <>
         <Logo />
         <Navbar />
         <TaskMenu />
      </>
   );
};

export default Header;
