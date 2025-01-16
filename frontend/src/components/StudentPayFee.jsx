import React from "react";

const StudentPayFee = () => {
  const handlePayment = () => {
    alert("Redirecting to Zoho Payment Gateway for student fee payment...");
    // Add Zoho payment integration logic here
  };

  return (
    <div className="student-pay max-w-sm mx-auto bg-gradient-to-br from-purple-600 to-blue-500 shadow-xl rounded-2xl border border-gray-300 overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="p-6 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Pay Student Fee</h2>
        <p className="text-lg text-gray-100 mb-6">
          Quickly pay your fees using our secure gateway.
        </p>
        <button
          onClick={handlePayment}
          className="w-full bg-white text-purple-600 font-bold py-3 px-5 rounded-lg shadow-md hover:bg-gray-100 hover:text-purple-700 transition duration-300"
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

export default StudentPayFee;
