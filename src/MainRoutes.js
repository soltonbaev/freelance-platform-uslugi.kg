import React from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import HomePage from './components/content/public/HomePage';
import AuthPage from './components/content/public/AuthPage';
import TaskPage from './components/content/public/TaskPage';
import ClientProfilePage from './components/content/private/ClientProfilePage';
import ClientMyTasks from './components/content/private/ClientMyTasks';
import CategoriesPage from "./components/content/public/CategoriesPage";
import BecomeWorker from './components/content/public/BecomeWorker';

const PUBLIC_ROUTES = [
   {link: '/', element: <HomePage />, id: 1},
   {link: '/auth', element: <AuthPage />, id: 2},
   {link: '/task', element: <TaskPage />, id: 3},
   {link: '/profile', element: <ClientProfilePage />, id: 4},
   {link: '/my-tasks', element: <ClientMyTasks />, id: 5},
   { link: "/categories-page", element: <CategoriesPage/>, id: 6},
   {link: "/become-worker", element: <BecomeWorker/>, id: 7}
];

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <div style={{ minHeight: "54vh" }}>
            <Outlet />
          </div>
        }
      >
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Route>
    </Routes>
  );
};

export default MainRoutes;
