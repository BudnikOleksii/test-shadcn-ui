import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Counter } from '@/features/counter/Counter';
import { Quotes } from '@/features/quotes/Quotes';
import ErrorPage from '@/pages/ErrorPage';
import { Layout } from '@/pages/Layout';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/counter',
        element: <Counter />,
      },
      {
        path: '/quotes',
        element: <Quotes />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
