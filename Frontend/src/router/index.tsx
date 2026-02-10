import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '@/pages/Login'; 
import { ROUTES } from './routes';
export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Navigate to={ROUTES.LOGIN} replace />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
]);