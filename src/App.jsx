import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout } from './component';
import Home from './QuickPage/Home';
import  Login  from './QuickPage/Login';
import SupplierScreen from './QuickPage/SupplierScreen';
import CollaboratorScreen from './QuickPage/CollaboratorScreen';
import PurchaseOrderScreen from './QuickPage/PurchaseOrderScreen';
import ReceiveItems from './QuickPage/ReceiveItems';
import QuoteEstimateScreen from './QuickPage/QuoteEstimateScreen';


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
        },
        {
          path: '/CollaboratorScreen',
          element: <CollaboratorScreen />,
        },
        {
          path: '/PurchaseOrderScreen',
          element: <PurchaseOrderScreen />,
        },
        {
          path:'/receive-items',
          element: <ReceiveItems />
        },
        {
          path:'/quote-estimate-screen',
          element:<QuoteEstimateScreen />
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
