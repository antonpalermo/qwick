import * as ReactDOM from 'react-dom/client';

import { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Assets from './app/assets';
import RootLayout from './app/root.layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Assets />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
