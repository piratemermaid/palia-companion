import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import ROUTES from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: ROUTES.map((route) => {
      return {
        path: route.path,
        element: <route.Component />,
      };
    }),
  },
]);

export default router;
