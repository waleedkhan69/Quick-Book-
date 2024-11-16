import React, { useState } from 'react';
import  DatePicker  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LocationAndPayment from './LocationAndPayment';

function CollaboratorScreen() {
  const [insuranceDate, setInsuranceDate] = useState(null);
  const [insuranceFile, setInsuranceFile] = useState(null);
  const [portalExpiryDate, setPortalExpiryDate] = useState(null);

  const handleFileChange = (e) => {
    setInsuranceFile(e.target.files[0]);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 ">
      <h2 className="text-2xl font-bold mb-4">Collaborator Information</h2>

      {/* Collaborator Type */}
      <section className="mb-6">
        <label className="block text-gray-700 mb-2">Collaborator Type:</label>
        <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Employee</option>
          <option>Subcontractor</option>
        </select>
      </section>

      {/* Basic Info */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 mb-2">Name:</label>
          <input type="text" placeholder="Enter name" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Company Name:</label>
          <input type="text" placeholder="Enter company name" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </section>

      {/* Contact Info */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 mb-2">Phone:</label>
          <input type="tel" placeholder="Enter phone number" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email:</label>
          <input type="email" placeholder="Enter email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </section>

      {/* Remarks/Notes */}
      <section className="mb-6">
        <label className="block text-gray-700 mb-2">Remarks/Notes:</label>
        <textarea placeholder="Add any notes" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </section>

      {/* Hour Rate */}
      <section className="mb-6">
        <label className="block text-gray-700 mb-2">Hour Rate:</label>
        <input type="number" placeholder="Enter hourly rate" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </section>

      {/* Location, Schedule, and Payment Info */}
      <section className="mb-6">
    
        <LocationAndPayment />
      </section>

      {/* Insurance Information */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Insurance Information</h3>
        <label className="block text-gray-700 mb-2">Insurance Expires On:</label>
        <DatePicker
          selected={insuranceDate}
          onChange={(date) => setInsuranceDate(date)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="block text-gray-700 mt-4 mb-2">Attach Insurance Proof:</label>
        <input type="file" onChange={handleFileChange} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        {insuranceFile && <p className="mt-2 text-gray-500">Uploaded File: {insuranceFile.name}</p>}
      </section>

      {/* Portal Access */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Portal Access</h3>
        <label className="block text-gray-700 mb-2">Allow Portal?</label>
        <input type="checkbox" className="mr-2" />
        <label className="inline text-gray-700">Expires:</label>
        <DatePicker
          selected={portalExpiryDate}
          onChange={(date) => setPortalExpiryDate(date)}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="block text-gray-700 mt-4 mb-2">Date of Last Access:</label>
        <input type="date" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </section>

      {/* User Credentials */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-3">User Credentials</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">User:</label>
            <input type="text" placeholder="Enter username" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password:</label>
            <input type="password" placeholder="Enter password" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <label className="block text-gray-700 mt-4 mb-2">Email Validation Code:</label>
        <input type="text" placeholder="Enter validation code" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </section>
    </div>
  );
}

export default CollaboratorScreen;
