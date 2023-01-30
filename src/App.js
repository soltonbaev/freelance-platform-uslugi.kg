import './App.css';
import React from 'react';
import AuthPage from './components/content/public/AuthPage';
import Navbar from './components/Header/Navbar';
import MainRoutes from './MainRoutes';

function App() {
   return (
      <div>
         <AuthPage />
         <MainRoutes />
      </div>
   );
}

export default App;
