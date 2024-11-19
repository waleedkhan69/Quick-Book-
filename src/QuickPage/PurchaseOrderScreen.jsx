import React, { useState } from 'react';
import '../../src/Background.css';

function PurchaseOrderScreen() {
  const [productLines, setProductLines] = useState([
    { productName: '', quantity: 1, unitPrice: 0 },
  ]);

  const handleAddProductLine = () => {
    setProductLines([
      ...productLines,
      { productName: '', quantity: 1, unitPrice: 0 },
    ]);
  };

  const handleProductLineChange = (index, field, value) => {
    const updatedProductLines = [...productLines];
    updatedProductLines[index][field] = value;
    setProductLines(updatedProductLines);
  };

  const calculateTotal = () => {
    return productLines.reduce(
      (total, line) => total + line.quantity * line.unitPrice,
      0
    );
  };

  return (
    <div className='container payback mx-auto p-4 sm:p-6 md:p-8 bg-cover bg-center'>
      <div className='bg-white bg-opacity-90 p-6 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-4'>Purchase Order</h2>

        {/* Supplier Info */}
        <section className='mb-6'>
          <h3 className='text-xl font-semibold mb-3'>Supplier Information</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label className='block text-gray-700 mb-2'>Supplier Name:</label>
              <input
                type='text'
                placeholder='Enter supplier name'
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-2'>Contact Info:</label>
              <input
                type='text'
                placeholder='Enter contact info'
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
          </div>
        </section>

        {/* Product Lines */}
        <section className='mb-6'>
          <h3 className='text-xl font-semibold mb-3'>Product Lines</h3>
          {productLines.map((line, index) => (
            <div
              key={index}
              className='grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4 p-4 border border-gray-300 rounded-md'
            >
              <div>
                <label className='block text-gray-700 mb-2'>
                  Product Name:
                </label>
                <input
                  type='text'
                  placeholder='Enter product name'
                  value={line.productName}
                  onChange={(e) =>
                    handleProductLineChange(
                      index,
                      'productName',
                      e.target.value
                    )
                  }
                  className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-gray-700 mb-2'>Quantity:</label>
                <input
                  type='number'
                  min='1'
                  value={line.quantity}
                  onChange={(e) =>
                    handleProductLineChange(
                      index,
                      'quantity',
                      parseInt(e.target.value) || 1
                    )
                  }
                  className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-gray-700 mb-2'>
                  Unit Price ($):
                </label>
                <input
                  type='number'
                  min='0'
                  value={line.unitPrice}
                  onChange={(e) =>
                    handleProductLineChange(
                      index,
                      'unitPrice',
                      parseFloat(e.target.value) || 0
                    )
                  }
                  className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div className='flex items-center'>
                <p className='text-gray-700'>
                  Total: ${line.quantity * line.unitPrice}
                </p>
              </div>
            </div>
          ))}
          <button
            onClick={handleAddProductLine}
            className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
          >
            Add Product Line
          </button>
        </section>

        {/* Order Summary */}
        <section className='mt-6'>
          <h3 className='text-xl font-semibold mb-3'>Order Summary</h3>
          <div className='p-4 border border-gray-300 rounded-md'>
            <p className='text-gray-700 font-semibold'>
              Total Order Amount: ${calculateTotal()}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PurchaseOrderScreen;
