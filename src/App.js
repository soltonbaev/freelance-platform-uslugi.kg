import './App.css';
import React from 'react';
import AuthPage from './components/content/public/AuthPage';
import Navbar from './components/Header/Navbar';
import MainRoutes from './MainRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {useGlobalContext} from './contexts/GlobalContextProvider';

function App() {
   const {isChatActive} = useGlobalContext();
   return (
      <>
         <Header />
         <MainRoutes />
         {isChatActive || <Footer />}
      </>
   );
}

export default App;
