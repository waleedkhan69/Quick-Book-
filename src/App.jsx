import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout } from './component';

import { Home, Login } from './pages';
import {
  Accounting,
  AdvanceAccounting,
  VirtualBookKeping,
  Payroll,
  PayContractors,
  TimeTracking,
  PaymentAndBanking,
  DestopEnterprise,
  Invoice,
  TrackExpenses,
  ManageBills,
  ExpertTaxPrepHelp,
  GetTexDeduction,
  RunReport,
  TrackMile,
  ManageProject,
  ManageEcommerce,
  GetPaidAndPayBills,
  ManageBanking,
  GetALoan,
  SmallBusiness,
  MidSizeBusiness,
  NewBusiness,
  SelfeEmployed,
  NonProfit,
  Manufacturing,
  Construction,
  ProfessionalServices,
  Legal,
  Restaurants,
  Retail,
} from './pages/index';

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'accounting',
          element: <Accounting />,
        },
        {
          path: 'advance-accounting',
          element: <AdvanceAccounting />,
        },
        {
          path: 'virtual-bookkeeping',
          element: <VirtualBookKeping />,
        },
        {
          path: 'payroll',
          element: <Payroll />,
        },
        {
          path: 'pay-contractor',
          element: <PayContractors />,
        },
        {
          path: 'time-tracking',
          element: <TimeTracking />,
        },
        {
          path: 'payment-banking',
          element: <PaymentAndBanking />,
        },
        {
          path: 'desktop-enterprise',
          element: <DestopEnterprise />,
        },
        {
          path: 'invoice',
          element: <Invoice />,
        },
        {
          path: 'track-expenses',
          element: <TrackExpenses />,
        },
        {
          path: 'manage-bills',
          element: <ManageBills />,
        },
        {
          path: 'expert-tax-prep-help',
          element: <ExpertTaxPrepHelp />,
        },
        {
          path: 'get-tex-deduction',
          element: <GetTexDeduction />,
        },
        {
          path: 'run-report',
          element: <RunReport />,
        },
        {
          path: 'track-mile',
          element: <TrackMile />,
        },
        {
          path: 'manage-project',
          element: <ManageProject />,
        },
        { path: 'manage-ecommerce', element: <ManageEcommerce /> },
        {
          path: 'get-paid-pay-bills',
          element: <GetPaidAndPayBills />,
        },
        {
          path: 'manage-banking',
          element: <ManageBanking />,
        },

        {
          path: 'get-a-loan',
          element: <GetALoan />,
        },
        {
          path: 'small-business',
          element: <SmallBusiness />,
        },
        {
          path: 'mid-size-business',
          element: <MidSizeBusiness />,
        },
        {
          path: 'new-business',
          element: <NewBusiness />,
        },
        {
          path: 'self-employed',
          element: <SelfeEmployed />,
        },
        {
          path: 'non-profit',
          element: <NonProfit />,
        },
        {
          path: 'manufacturing',
          element: <Manufacturing />,
        },
        {
          path: 'construction',
          element: <Construction />,
        },
        {
          path: 'professional-services',
          element: <ProfessionalServices />,
        },
        {
          path: 'legal',
          element: <Legal />,
        },
        {
          path: 'restaurants',
          element: <Restaurants />,
        },
        {
          path: 'retail',
          element: <Retail />,
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
