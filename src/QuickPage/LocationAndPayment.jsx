import React, { useState } from 'react';
import '../../src/Background.css';

function LocationAndPayment() {
  const [workLocations, setWorkLocations] = useState([
    { location: '', schedule: '', hourRate: '', paymentType: 'cash' },
  ]);

  const handleAddLocation = () => {
    setWorkLocations([
      ...workLocations,
      { location: '', schedule: '', hourRate: '', paymentType: 'cash' },
    ]);
  };

  const handleLocationChange = (index, field, value) => {
    const updatedLocations = [...workLocations];
    updatedLocations[index][field] = value;
    setWorkLocations(updatedLocations);
  };

  return (
    <div className='payback'>
      <h2 className='text-2xl font-bold mb-4'>Collaborator Information</h2>

      {/* Work Locations & Schedule */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-3'>
          Work Locations & Schedule
        </h3>
        {workLocations.map((location, index) => (
          <div
            key={index}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 p-4 border border-gray-300 rounded-md'
          >
            <div>
              <label className='block text-gray-700 mb-2'>Location:</label>
              <input
                type='text'
                placeholder='Enter location'
                value={location.location}
                onChange={(e) =>
                  handleLocationChange(index, 'location', e.target.value)
                }
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-2'>Schedule:</label>
              <input
                type='text'
                placeholder='Enter schedule'
                value={location.schedule}
                onChange={(e) =>
                  handleLocationChange(index, 'schedule', e.target.value)
                }
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-2'>
                Agreed Hour Rate ($):
              </label>
              <input
                type='number'
                placeholder='Enter rate'
                value={location.hourRate}
                onChange={(e) =>
                  handleLocationChange(index, 'hourRate', e.target.value)
                }
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-2'>Payment Type:</label>
              <select
                value={location.paymentType}
                onChange={(e) =>
                  handleLocationChange(index, 'paymentType', e.target.value)
                }
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <option value='cash'>Cash</option>
                <option value='check'>Check</option>
                <option value='debit card'>Debit Card</option>
                <option value='credit card'>Credit Card</option>
                <option value='direct deposit'>Direct Deposit</option>
              </select>
            </div>
          </div>
        ))}
        <button
          onClick={handleAddLocation}
          className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
        >
          Add Another Location
        </button>
      </section>
    </div>
  );
}

export default LocationAndPayment;
