import React from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import HomePage from './components/content/public/HomePage';
import AuthPage from './components/content/public/AuthPage';
import TaskPage from './components/content/public/TaskPage';
import ClientProfilePage from './components/content/private/ClientProfilePage';
import ClientMyTasks from './components/content/private/ClientMyTasks';
import CategoriesPage from './components/content/public/CategoriesPage';
import TaskCategoryPage from './components/content/public/TaskCategoryPage';
import BecomeWorker from './components/content/public/BecomeWorker';
import FoundWorkersPage from './components/content/public/StepWizard/FoundWorkersPage';
import TaskOptionsPage from './components/content/public/StepWizard/TaskOptionsPage';
import CalendarPage from './components/content/public/StepWizard/CalendarPage';
import ConfirmationPage from './components/content/public/StepWizard/ConfirmationPage';

const PUBLIC_ROUTES = [
   {link: '/', element: <HomePage />, id: 1},
   {link: '/auth', element: <AuthPage />, id: 2},
   {link: '/task', element: <TaskPage />, id: 3},
   {link: '/profile', element: <ClientProfilePage />, id: 4},
   {link: '/my-tasks', element: <ClientMyTasks />, id: 5},
   {link: '/categories-page', element: <CategoriesPage />, id: 6},
   {link: '/task-category', element: <TaskCategoryPage />, id: 7},
   {link: '/become-worker', element: <BecomeWorker />, id: 8},
   {link: '/task-options', element: <TaskOptionsPage />, id: 9},
   {link: '/calendar', element: <CalendarPage />, id: 10},
   {link: '/workers', element: <FoundWorkersPage />, id: 11},
   {link: '/confirm', element: <ConfirmationPage />, id: 12},
];

const MainRoutes = () => {
   return (
      <Routes>
         <Route
            element={
               <div style={{minHeigth: '54vh'}}>
                  <Outlet />
               </div>
            }
         >
            {PUBLIC_ROUTES.map(item => (
               <Route path={item.link} element={item.element} key={item.id} />
            ))}
         </Route>
      </Routes>
   );
};

export default MainRoutes;
