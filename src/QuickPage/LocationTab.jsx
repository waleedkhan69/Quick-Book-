import React, { useState } from 'react';
import '../../src/Background.css';

const LocationTab = () => {
  const [locations, setLocations] = useState([]); // State to manage the list of locations
  const [newLocation, setNewLocation] = useState(''); // State for the input field

  const handleAddLocation = () => {
    if (newLocation.trim() !== '') {
      setLocations([...locations, newLocation]);
      setNewLocation('');
    } else {
      alert('Please enter a valid location.');
    }
  };

  return (
    <div className='p-4 payback'>
      <h2 className='text-lg font-semibold'>Locations</h2>
      <ul className='mt-4'>
        {locations.map((location, index) => (
          <li key={index} className='py-1 text-gray-800'>
            {location}
          </li>
        ))}
      </ul>
      <div className='mt-4'>
        <input
          type='text'
          value={newLocation}
          onChange={(e) => setNewLocation(e.target.value)}
          placeholder='Enter a location'
          className='px-4 py-2 mr-2 text-sm border rounded-md'
        />
        <button
          onClick={handleAddLocation}
          className='px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md'
        >
          Add Location
        </button>
      </div>
    </div>
  );
};

export default LocationTab;
