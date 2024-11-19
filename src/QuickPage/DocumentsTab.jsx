import React, { useState } from 'react';
import '../../src/Background.css';

const DocumentsTab = () => {
  const [documents, setDocuments] = useState([]);
  const [docType, setDocType] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  // Add Document
  const handleAddDocument = () => {
    if (!docType.trim() || !expiryDate) {
      alert('Please fill in all fields.');
      return;
    }

    const newDocument = {
      type: docType,
      expiry: expiryDate,
      active: new Date(expiryDate) >= new Date(), // Set active status based on expiry date
    };

    setDocuments([...documents, newDocument]);
    setDocType('');
    setExpiryDate('');
  };

  // Toggle Active Status
  const toggleActiveStatus = (index) => {
    setDocuments((prevDocuments) =>
      prevDocuments.map((doc, i) =>
        i === index ? { ...doc, active: !doc.active } : doc
      )
    );
  };

  // Delete Document
  const handleDeleteDocument = (index) => {
    setDocuments((prevDocuments) =>
      prevDocuments.filter((_, i) => i !== index)
    );
  };

  return (
    <div className='p-4 payback'>
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
                className={`flex items-center justify-between p-2 rounded-md ${
                  new Date(doc.expiry) < new Date()
                    ? 'bg-red-100'
                    : 'bg-gray-100'
                }`}
              >
                <div>
                  <span className='font-medium'>{doc.type}</span>
                  <span className='ml-4 text-sm text-gray-500'>
                    {doc.expiry}
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <button
                    onClick={() => toggleActiveStatus(index)}
                    className={`px-2 py-1 text-xs font-medium rounded-md ${
                      doc.active
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {doc.active ? 'Active' : 'Inactive'}
                  </button>
                  <button
                    onClick={() => handleDeleteDocument(index)}
                    className='px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-md'
                  >
                    Delete
                  </button>
                </div>
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
