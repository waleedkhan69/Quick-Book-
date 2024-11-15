import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout } from './component';
import Home from './QuickPage/Home';
import  Login  from './QuickPage/Login';
import SupplierScreen from './QuickPage/SupplierScreen';

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path:'/supplier-screen',
          element: <SupplierScreen />
        }
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return <RouterProvider router={routes} />;
};
export default App;
