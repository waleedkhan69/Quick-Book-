import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout } from './component';
import { Home, Login } from './pages';
// import {
//   Accounting,
//   AdvanceAccounting,
//   VirtualBookKeping,
//   Payroll,
//   PayContractors,
//   TimeTracking,
//   PaymentAndBanking,
//   DestopEnterprise,
//   Invoice,
//   TrackExpenses,
//   ManageBills,
//   ExpertTaxPrepHelp,
//   GetTexDeduction,
//   RunReport,
//   TrackMile,
//   ManageProject,
//   ManageEcommerce,
//   GetPaidAndPayBills,
//   ManageBanking,
//   GetALoan,
//   SmallBusiness,
//   MidSizeBusiness,
//   NewBusiness,
//   SelfeEmployed,
//   NonProfit,
//   Manufacturing,
//   Construction,
//   ProfessionalServices,
//   Legal,
//   Restaurants,
//   Retail,
// } from './pages/index';

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
