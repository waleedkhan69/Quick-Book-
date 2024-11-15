import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout } from './component';

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
  ]);
  return <RouterProvider router={routes} />;
};
export default App;
