import './App.css';
import React, {useEffect} from 'react';
import AuthPage from './components/content/public/AuthPage';
import Navbar from './components/Header/Navbar';
import MainRoutes from './MainRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {useGlobalContext} from './contexts/GlobalContextProvider';
import {ConsoleGroup, ConsoleGroupEnd} from './helpers/console';

function App() {
   useEffect(() => {
      ConsoleGroup('Spawning App.js...');
   }, []);

   const {isChatActive} = useGlobalContext();
   return (
      <>
      {isChatActive || <Header />}
         
         <MainRoutes />
         {isChatActive || <Footer />}
      </>
   );
}

export default App;
