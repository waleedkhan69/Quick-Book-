import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout } from './component';
import Home from './QuickPage/Home';
import Login from './QuickPage/Login';
import SupplierScreen from './QuickPage/SupplierScreen';
import CollaboratorScreen from './QuickPage/CollaboratorScreen';
import PurchaseOrderScreen from './QuickPage/PurchaseOrderScreen';
import ReceiveItems from './QuickPage/ReceiveItems';
import QuoteEstimateScreen from './QuickPage/QuoteEstimateScreen';
import InvoiceScreen from './QuickPage/InvoiceScreen';
import SalesPersonScreen from './QuickPage/SalesPersonScreen';
import ScheduleItemToBeInvoiced from './QuickPage/ScheduleItemToBeInvoiced';
import CheckScreen from './QuickPage/CheckScreen';
import ContractScreen from './QuickPage/ContractScreen';
import AccountScreen from './QuickPage/AccountScreen';
import PayReceiveScreen from './QuickPage/PayReceiveScreen';

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
          path: '/supplier-screen',
          element: <SupplierScreen />,
        },
        {
          path: '/collaborator-screen',
          element: <CollaboratorScreen />,
        },
        {
          path: '/purchase-order-screen',
          element: <PurchaseOrderScreen />,
        },
        {
          path: '/receive-purchase-order-screen',
          element: <ReceiveItems />,
        },
        {
          path: '/quote-estimate-screen',
          element: <QuoteEstimateScreen />,
        },
        {
          path:'/invoice-screen',
          element: <InvoiceScreen />,
        },
        {
          path:'/sales-person-screen',
          element:<SalesPersonScreen/>
        },
        {
          path:'/schedule-item-to-be-invoiced-screen',
          element:<ScheduleItemToBeInvoiced/>
        },
        {
          path:'/write-check-screen',
          element:<CheckScreen />
        },
        {
          path:'/contract-screen',
          element:<ContractScreen />
        },
        {
          path:'/account-screen',
          element:<AccountScreen />
        },
        {
          path:'/pay-/-receive-screen',
          element:<PayReceiveScreen />
        }
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};
export default App;
