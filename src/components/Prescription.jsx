import React, { useState } from 'react';
import axios from 'axios'; // For making API calls

const PrescriptionAnalyzer = () => {
  const [file, setFile] = useState(null); // Store the uploaded file
  const [medicineData, setMedicineData] = useState(null); // Store medicine details from API
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setMedicineData(null); // Reset previous results
    setError(null); // Reset errors
  };

  // Handle file upload and API call
  const handleUpload = async () => {
    if (!file) {
      setError('Please upload a prescription file first.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('prescription', file); // 'prescription' is the key expected by the backend

    try {
      const response = await axios.post('http://your-backend-api.com/api/analyze-prescription', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMedicineData(response.data); // Assuming the API returns medicine details
    } catch (err) {
      setError('Failed to analyze the prescription. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Prescription Analyzer</h2>

      {/* File Input and Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
        <input
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={handleFileChange}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button
          onClick={handleUpload}
          disabled={loading}
          className={`py-2 px-6 rounded-lg text-white font-semibold ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors`}
        >
          {loading ? 'Analyzing...' : 'Analyze Prescription'}
        </button>
      </div>

      {/* Error Display */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {/* Medicine Details Display */}
      {medicineData && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Medicine Details</h3>
          {medicineData.medicines.map((med, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50 shadow-sm"
            >
              <h4 className="text-lg font-medium text-gray-800">{med.name}</h4>
              <p className="text-gray-600">
                <span className="font-semibold">Description:</span> {med.description}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Dosage:</span> {med.dosage}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Category:</span> {med.category}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PrescriptionAnalyzer;




{/*<div className="px-[5%] w-full  flex items-center justify-between">
        <h1 className=" text-xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          VitaminsAndSupplement<small className="ml-2 text-sm text-zinc-600">category</small>
        </h1>
        <div className="flex items-center w-[80%] ">
          <Topnav />
          <Dropdown
            title="Category"
            options={["recommended", "top_rated", "C", "D"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%] "></div>
        </div>
      </div>*/}