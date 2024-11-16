import React from 'react';
import CustomerScreen from '../QuickPage/CustomerScreen';
import TransferInventeryScreen from '../QuickPage/TransferInventeryScreen';
import QuoteEstimateInvoiceTemplate from './QuoteEstimateInvoiceTemplate';

const Home = () => {
  return (
    <div>
      <CustomerScreen />
      <TransferInventeryScreen />
      <QuoteEstimateInvoiceTemplate />
    </div>
  );
};

export default Home;
