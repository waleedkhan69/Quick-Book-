import React, { useState } from 'react';
<<<<<<< HEAD
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
=======
import { FaSave, FaUserTie, FaPhone, FaBuilding, FaRegCalendarAlt, FaTimes } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdAdd, MdUploadFile, MdNote } from 'react-icons/md';
import { BsFileEarmarkText, BsCardChecklist } from 'react-icons/bs';
import { RiNumbersFill } from 'react-icons/ri';
import { BiSolidIdCard } from 'react-icons/bi';
>>>>>>> 40dcc004ab839a5e35cbc60e3d24ceda09572040

const SupplierScreen = () => {
  // Main form data state
  const [formData, setFormData] = useState({
    companyName: '',
    registrationNumber: '',
    taxId: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    insuranceExpiry: '',
    remarks: ''
  });

  // Products state
  const [products, setProducts] = useState([]);
  const [productInput, setProductInput] = useState({
    name: '',
    quantity: '',
    price: ''
  });
  const [showProductForm, setShowProductForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  
  // Array to store all suppliers data
  const [allSuppliers, setAllSuppliers] = useState([]);

  // Handle input changes for main form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle product input changes
  const handleProductInputChange = (e) => {
    const { name, value } = e.target;
    setProductInput(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Add new product
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (productInput.name && productInput.quantity && productInput.price) {
      setProducts(prev => [...prev, { ...productInput, id: Date.now() }]);
      setProductInput({ name: '', quantity: '', price: '' });
      setShowProductForm(false);
    }
  };

  // Remove product
  const handleRemoveProduct = (productId) => {
    setProducts(prev => prev.filter(product => product.id !== productId));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Save all data
  const handleSave = () => {
    const supplierData = {
      ...formData,
      products,
      insuranceFile: selectedFile?.name,
      id: Date.now(),
      dateAdded: new Date().toISOString()
    };

    setAllSuppliers(prev => [...prev, supplierData]);
    
    // Log the saved data
    console.log('All Suppliers:', [...allSuppliers, supplierData]);
    console.log('Current Supplier Data:', supplierData);

    // Reset form (optional)
    setFormData({
      companyName: '',
      registrationNumber: '',
      taxId: '',
      contactName: '',
      email: '',
      phone: '',
      address: '',
      insuranceExpiry: '',
      remarks: ''
    });
    setProducts([]);
    setSelectedFile(null);
  };

  return (
<<<<<<< HEAD
    <div className='container mx-auto p-4 sm:p-6 md:p-8'>
      <h2 className='text-2xl font-bold mb-4'>Supplier Information</h2>

      {/* Basic Information Section */}
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
        <div>
          <label className='block text-gray-700 mb-2'>Name:</label>
          <input
            type='text'
            placeholder='Enter supplier name'
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div>
          <label className='block text-gray-700 mb-2'>Supplier ID:</label>
          <input
            type='text'
            placeholder='Enter supplier ID'
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
      </section>

      {/* Contact Information Section */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-3'>Contact Information</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div>
            <label className='block text-gray-700 mb-2'>Phone:</label>
            <input
              type='tel'
              placeholder='Enter phone number'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label className='block text-gray-700 mb-2'>Email:</label>
            <input
              type='email'
              placeholder='Enter email'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='sm:col-span-2 lg:col-span-1'>
            <label className='block text-gray-700 mb-2'>Address:</label>
            <textarea
              placeholder='Enter address'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            ></textarea>
          </div>
        </div>
      </section>

      {/* Remarks Section */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-3'>Remarks/Notes</h3>
        <textarea
          placeholder='Add any notes'
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        ></textarea>
      </section>

      {/* Products Supplied Section */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-3'>Products Supplied</h3>
        {/* Placeholder for product list, ideally dynamically rendered */}
        <ul className='list-disc pl-5'>
          <li className='text-gray-600'>Product 1</li>
          <li className='text-gray-600'>Product 2</li>
        </ul>
      </section>

      {/* Insurance Information Section */}
      <section>
        <h3 className='text-xl font-semibold mb-3'>Insurance Information</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label className='block text-gray-700 mb-2'>
              Insurance Expires On:
            </label>
            <DatePicker
              selected={insuranceDate}
              onChange={(date) => setInsuranceDate(date)}
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label className='block text-gray-700 mb-2'>
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
          </div>
=======
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <FaBuilding className="w-6 h-6 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">Supplier Details</h1>
            </div>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <FaSave className="w-4 h-4 mr-2" />
              Save
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-6 ">
          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <BsFileEarmarkText className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Basic Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center">
                    <FaBuilding className="w-4 h-4 mr-1 text-gray-500" />
                    Company Name
                  </div>
                </label>
                <input
                  type="text"
                  name="companyName"
                  className="w-full p-2 border rounded-md"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center">
                    <RiNumbersFill className="w-4 h-4 mr-1 text-gray-500" />
                    Registration Number
                  </div>
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  className="w-full p-2 border rounded-md"
                  value={formData.registrationNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center">
                    <BiSolidIdCard className="w-4 h-4 mr-1 text-gray-500" />
                    Tax ID
                  </div>
                </label>
                <input
                  type="text"
                  name="taxId"
                  className="w-full p-2 border rounded-md"
                  value={formData.taxId}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <FaUserTie className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center">
                    <FaUserTie className="w-4 h-4 mr-1 text-gray-500" />
                    Primary Contact
                  </div>
                </label>
                <input
                  type="text"
                  name="contactName"
                  className="w-full p-2 border rounded-md"
                  value={formData.contactName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center">
                    <MdEmail className="w-4 h-4 mr-1 text-gray-500" />
                    Email
                  </div>
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded-md"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center">
                    <FaPhone className="w-4 h-4 mr-1 text-gray-500" />
                    Phone
                  </div>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-2 border rounded-md"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center">
                  <MdLocationOn className="w-4 h-4 mr-1 text-gray-500" />
                  Address
                </div>
              </label>
              <textarea
                name="address"
                rows="3"
                className="w-full p-2 border rounded-md"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>

    

           {/* Products Supplied Section */}
           <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <BsCardChecklist className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Products Supplied</h2>
            </div>
            <div className="border rounded-md p-4">
              {!showProductForm ? (
                <button 
                  onClick={() => setShowProductForm(true)}
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <MdAdd className="w-5 h-5 mr-2" />
                  Add Product
                </button>
              ) : (
                <form onSubmit={handleAddProduct} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Product Name"
                      value={productInput.name}
                      onChange={handleProductInputChange}
                      className="p-2 border rounded-md"
                      required
                    />
                    <input
                      type="number"
                      name="quantity"
                      placeholder="Quantity"
                      value={productInput.quantity}
                      onChange={handleProductInputChange}
                      className="p-2 border rounded-md"
                      required
                    />
                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      value={productInput.price}
                      onChange={handleProductInputChange}
                      className="p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Add
                    </button>
                    <button 
                      type="button"
                      onClick={() => setShowProductForm(false)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {products.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Added Products:</h3>
                  <div className="space-y-2">
                    {products.map((product) => (
                      <div 
                        key={product.id} 
                        className="flex items-center justify-between p-2  rounded"
                      >
                        <div className="flex-1 grid grid-cols-3 gap-4">
                          <span>{product.name}</span>
                          <span>Qty: {product.quantity}</span>
                          <span>${product.price}</span>
                        </div>
                        <button 
                          onClick={() => handleRemoveProduct(product.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Remarks */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <MdNote className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Remarks/Notes</h2>
            </div>
            <textarea
              name="remarks"
              rows="4"
              className="w-full p-2 border rounded-md"
              placeholder="Enter any additional notes here..."
              value={formData.remarks}
              onChange={handleInputChange}
            />
          </div>
>>>>>>> 40dcc004ab839a5e35cbc60e3d24ceda09572040
        </div>
      </div>
    </div>
  );
};

export default SupplierScreen;