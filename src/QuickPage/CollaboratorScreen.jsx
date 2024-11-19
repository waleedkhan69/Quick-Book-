import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LocationAndPayment from './LocationAndPayment';
import '../../src/Background.css';

function CollaboratorScreen() {
  const [insuranceDate, setInsuranceDate] = useState(null);
  const [insuranceFile, setInsuranceFile] = useState(null);
  const [portalExpiryDate, setPortalExpiryDate] = useState(null);

  const handleFileChange = (e) => {
    setInsuranceFile(e.target.files[0]);
  };

  return (
    <div className='container mx-auto p-4 sm:p-6 md:p-8 payback'>
      <div className='bg-white bg-opacity-70 p-6 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-4'>Collaborator Information</h2>

        {/* Collaborator Type */}
        <section className='mb-6'>
          <label className='block text-gray-700 mb-2'>Collaborator Type:</label>
          <select className='w-full p-2 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
            <option>Employee</option>
            <option>Subcontractor</option>
          </select>
        </section>

        {/* Other Sections */}
        {/* Include other sections here, like Basic Info, Contact Info, etc. */}
        {/* Same content as your original implementation */}

        {/* Insurance Information */}
        <section className='mb-6'>
          <h3 className='text-xl font-semibold mb-3'>Insurance Information</h3>
          <label className='block text-gray-700 mb-2'>
            Insurance Expires On:
          </label>
          <DatePicker
            selected={insuranceDate}
            onChange={(date) => setInsuranceDate(date)}
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <label className='block text-gray-700 mt-4 mb-2'>
            Attach Insurance Proof:
          </label>
          <input
            type='file'
            onChange={handleFileChange}
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          {insuranceFile && (
            <p className='mt-2 text-gray-500'>
              Uploaded File: {insuranceFile.name}
            </p>
          )}
        </section>

        {/* Continue with other sections like Portal Access and User Credentials */}
      </div>
    </div>
  );
}

export default CollaboratorScreen;
