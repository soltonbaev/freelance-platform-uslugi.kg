import React from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import HomePage from './components/content/public/HomePage';
import AuthPage from './components/content/public/AuthPage';
import TaskPage from './components/content/public/TaskPage';
import ClientProfilePage from './components/content/private/ClientProfilePage';

import CategoriesPage from './components/content/public/CategoriesPage';
import TaskCategoryPage from './components/content/public/TaskCategoryPage';
import BecomeWorker from './components/content/public/BecomeWorker';
import FoundWorkersPage from './components/content/public/StepWizard/FoundWorkersPage';
import TaskOptionsPage from './components/content/public/StepWizard/TaskOptionsPage';
import ConfirmationPage from './components/content/public/StepWizard/ConfirmationPage';
import CalendarTimePage from './components/content/public/StepWizard/CalendarTimePage';
import ChatBox from './components/content/private/chat/ChatBox';
import ChatHistory from './components/content/private/chat/ChatHistory';
// import Review from '../../components/content/public/reviews/Review';
import MyTasks from './components/content/private/MyTasks';

const PUBLIC_ROUTES = [
   {link: '/', element: <HomePage />, id: 1},
   {link: '/auth', element: <AuthPage />, id: 2},
   {link: '/task', element: <TaskPage />, id: 3},
   {link: '/profile', element: <ClientProfilePage />, id: 4},
   {link: '/my-tasks', element: <MyTasks />, id: 5},
   {link: '/categories-page', element: <CategoriesPage />, id: 6},
   {link: '/task-category/:id', element: <TaskCategoryPage />, id: 7},
   {link: '/become-worker', element: <BecomeWorker />, id: 8},
   {link: '/task-options', element: <TaskOptionsPage />, id: 9},
   {link: '/calendar', element: <CalendarTimePage />, id: 10},
   {link: '/workers', element: <FoundWorkersPage />, id: 11},
   {link: '/confirm', element: <ConfirmationPage />, id: 12},
   // {link: '/review', element: <Review />, id: 13},
   {link: '/chat', element: <ChatBox />, id: 13},
   // {link: '/chat-history', element: <ChatHistory />, id: 13},
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
