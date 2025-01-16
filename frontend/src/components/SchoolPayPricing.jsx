import React from "react";

const SchoolPayPricing = () => {
  const handlePayment = () => {
    alert("Redirecting to Zoho Payment Gateway for school pricing payment...");
    // Add Zoho payment integration logic here
  };

  return (
    <div className="school-pay max-w-sm mx-auto bg-gradient-to-br from-green-600 to-blue-400 shadow-2xl rounded-2xl border border-gray-300 overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="p-6 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Pay School Pricing
        </h2>
        <p className="text-lg text-gray-100 mb-6">
          Choose the best pricing plan for your school and pay securely.
        </p>
        <button
          onClick={handlePayment}
          className="w-full bg-white text-green-600 font-bold py-3 px-5 rounded-lg shadow-md hover:bg-gray-100 hover:text-green-700 transition duration-300"
        >
          Pay Now
        </button>
      </div>
      <div className="bg-white py-3 text-sm text-gray-600 text-center">
        100% Secure Payment Gateway Powered by Zoho
      </div>
    </div>
  );
};

export default SchoolPayPricing;
