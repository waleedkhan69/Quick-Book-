import React from 'react';
import CustomerScreen from '../QuickPage/CustomerScreen';
import TransferInventeryScreen from '../QuickPage/TransferInventeryScreen';
import QuoteEstimateInvoiceTemplate from './QuoteEstimateInvoiceTemplate';
import '../../src/Background.css';

const Home = () => {
  return (
    <div className='payback'>
      <CustomerScreen />
      <TransferInventeryScreen />
      <QuoteEstimateInvoiceTemplate />
    </div>
  );
};

export default Home;
