import React, { useState } from 'react';

const DocumentsTab = () => {
  const [documents, setDocuments] = useState([]);
  const [docType, setDocType] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleAddDocument = () => {
    setDocuments([
      ...documents,
      { type: docType, expiry: expiryDate, active: true },
    ]);
    setDocType('');
    setExpiryDate('');
  };

  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Documents</h2>

      {/* Add New Document */}
      <div className='mt-4 space-y-2'>
        <div>
          <label className='block text-sm font-medium'>Document Type</label>
          <input
            type='text'
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
            placeholder='e.g., Contract, Insurance Proof'
            className='w-full p-2 mt-1 border rounded-md'
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>Expires On</label>
          <input
            type='date'
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className='w-full p-2 mt-1 border rounded-md'
          />
        </div>
        <button
          onClick={handleAddDocument}
          className='px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-500 rounded-md'
        >
          Add Document
        </button>
      </div>

      {/* Document List */}
      <div className='mt-6'>
        <h3 className='mb-2 text-sm font-medium'>Uploaded Documents</h3>
        {documents.length > 0 ? (
          <ul className='space-y-2'>
            {documents.map((doc, index) => (
              <li
                key={index}
                className='flex items-center justify-between p-2 bg-gray-100 rounded-md'
              >
                <span>{doc.type}</span>
                <span>{doc.expiry}</span>
                <span
                  className={`text-xs ${
                    doc.active ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {doc.active ? 'Active' : 'Inactive'}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-sm text-gray-500'>No documents added yet.</p>
        )}
      </div>
    </div>
  );
};

export default DocumentsTab;
