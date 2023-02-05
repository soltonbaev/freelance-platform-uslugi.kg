import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter} from 'react-router-dom';
import GlobalContextProvider from './contexts/GlobalContextProvider';
import StepWizardContextProvider from './contexts/StepWizardContext';
import {ConsoleGroup} from './helpers/console';

const root = ReactDOM.createRoot(document.getElementById('root'));
ConsoleGroup('Spawning index.js...');
root.render(
   <BrowserRouter>
      <GlobalContextProvider>
         <StepWizardContextProvider>
            <App />
         </StepWizardContextProvider>
      </GlobalContextProvider>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
