import React, { Fragment, useState } from 'react';
import '../../src/Background.css';

const QuoteEstimateInvoiceTemplate = () => {
  const [templateType, setTemplateType] = useState('Quote');
  const [templateStyle, setTemplateStyle] = useState('Minimalist');
  const [footerNotes, setFooterNotes] = useState('');

  const handleTypeChange = (e) => setTemplateType(e.target.value);
  const handleStyleChange = (e) => setTemplateStyle(e.target.value);
  const handleNotesChange = (e) => setFooterNotes(e.target.value);

  return (
    <Fragment>
      <div className='min-h-screen payback bg-cover bg-center bg-no-repeat flex flex-col items-center p-4'>
        {/* Main Content */}
        <div className='w-full max-w-6xl bg-white bg-opacity-80 shadow-lg rounded-lg p-6 mb-4'>
          <h1 className='text-2xl font-bold text-blue-700 text-center md:text-left'>
            Quote / Estimate / Invoice Template
          </h1>
          <div className='flex flex-wrap justify-between items-center mt-4 space-y-2 md:space-y-0'>
            <select
              value={templateType}
              onChange={handleTypeChange}
              className='border rounded-lg p-2 bg-white text-gray-700 w-full md:w-auto'
            >
              <option value='Quote'>Quote</option>
              <option value='Estimate'>Estimate</option>
              <option value='Invoice'>Invoice</option>
            </select>
            <div className='space-x-4 flex justify-center w-full md:w-auto'>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow-md'>
                Save Template
              </button>
              <button className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 shadow-md'>
                Reset Template
              </button>
            </div>
          </div>
        </div>

        <div className='w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6'>
          {/* Template Preview */}
          <div className='lg:col-span-8 bg-white bg-opacity-80 shadow-lg rounded-lg p-6'>
            <h2 className='text-lg font-bold text-blue-700 mb-4'>
              Template Preview ({templateType})
            </h2>
            {/* Template Header */}
            <div className='border-b pb-4 mb-4'>
              <div className='flex flex-wrap justify-between items-center'>
                <div>
                  <p className='text-xl font-bold text-gray-800'>
                    [Your Company Name]
                  </p>
                  <p className='text-sm text-gray-600'>Address Line 1</p>
                  <p className='text-sm text-gray-600'>City, State, ZIP</p>
                </div>
                <div className='text-right'>
                  <p className='text-sm text-gray-600'>
                    Template: {templateType} #123
                  </p>
                  <p className='text-sm text-gray-600'>Date: 2024-11-15</p>
                  <p className='text-sm text-gray-600'>Due Date: 2024-11-30</p>
                </div>
              </div>
            </div>
            {/* Client Information */}
            <div className='mb-4'>
              <h3 className='font-bold text-gray-800'>Client Information</h3>
              <p className='text-sm text-gray-600'>Client Name</p>
              <p className='text-sm text-gray-600'>Client Address</p>
              <p className='text-sm text-gray-600'>Client Contact</p>
            </div>
            {/* Itemized Table */}
            <div className='overflow-auto'>
              <table className='w-full border-collapse border border-gray-300 text-sm text-gray-800'>
                <thead className='bg-blue-100'>
                  <tr>
                    <th className='border p-2'>Item Name</th>
                    <th className='border p-2'>Description</th>
                    <th className='border p-2'>Quantity</th>
                    <th className='border p-2'>Unit Price</th>
                    <th className='border p-2'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border p-2'>Item 1</td>
                    <td className='border p-2'>Sample Description</td>
                    <td className='border p-2'>2</td>
                    <td className='border p-2'>$50</td>
                    <td className='border p-2'>$100</td>
                  </tr>
                  <tr>
                    <td className='border p-2'>Item 2</td>
                    <td className='border p-2'>Another Description</td>
                    <td className='border p-2'>1</td>
                    <td className='border p-2'>$150</td>
                    <td className='border p-2'>$150</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Footer */}
            <div className='mt-4'>
              <p className='text-sm text-gray-600'>Subtotal: $250</p>
              <p className='text-sm text-gray-600'>Tax: $25</p>
              <p className='text-sm text-gray-600'>Discount: $0</p>
              <p className='font-bold text-gray-800'>Grand Total: $275</p>
              <p className='text-sm mt-2 text-gray-600'>
                Notes: {footerNotes || 'No additional notes'}
              </p>
            </div>
          </div>

          {/* Sidebar Configuration */}
          <div className='lg:col-span-4 bg-white bg-opacity-80 shadow-lg rounded-lg p-6'>
            <h2 className='text-lg font-bold text-blue-700 mb-4'>
              Configuration
            </h2>
            <div className='space-y-4'>
              {/* Template Style */}
              <div>
                <label className='block text-gray-700 font-medium mb-2'>
                  Template Style
                </label>
                <select
                  value={templateStyle}
                  onChange={handleStyleChange}
                  className='border rounded-lg p-2 w-full bg-white'
                >
                  <option value='Minimalist'>Minimalist</option>
                  <option value='Classic'>Classic</option>
                  <option value='Modern'>Modern</option>
                </select>
              </div>
              {/* Footer Notes */}
              <div>
                <label className='block text-gray-700 font-medium mb-2'>
                  Footer Notes
                </label>
                <textarea
                  value={footerNotes}
                  onChange={handleNotesChange}
                  rows='4'
                  className='border rounded-lg p-2 w-full bg-white'
                  placeholder='Enter footer notes or terms here...'
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default QuoteEstimateInvoiceTemplate;
