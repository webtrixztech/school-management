"use client";
import { postApiData } from "@/helper/common";
import Link from "next/link";
import { useState, useEffect } from "react";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [ZPaymentsInstance, setZPaymentsInstance] = useState(null);

  useEffect(() => {
    // Ensure this is only executed on the client-side
    if (typeof window !== "undefined") {
      // Check if the ZPayments script is already loaded
      if (!window.ZPayments) {
        const script = document.createElement("script");
        script.src = "https://static.zohocdn.com/zpay/zpay-js/v1/zpayments.js";
        script.async = true;

        // Wait for the script to load
        script.onload = () => {
          if (window.ZPayments) {
            const config = {
              account_id: "60034736461",
              domain: "IN",
              otherOptions: {
                api_key:
                  "1003.4e0b9d9b51e21963448abaa1b635033f.f050f18337b0fedac083570ecb11778e",
              },
            };
            try {
              const instance = new window.ZPayments(config);
              setZPaymentsInstance(instance);
              console.log("ZPayments instance created");
            } catch (error) {
              console.error("Error initializing ZPayments:", error);
            }
          }
        };

        script.onerror = () => {
          console.error("Error loading ZPayments script");
        };

        // Append the script to the body
        document.body.appendChild(script);
      } else {
        console.log("ZPayments SDK is already loaded");
      }
    }
  }, []);

  const handlerSubmit = async () => {
    if (!ZPaymentsInstance) {
      console.error("ZPayments instance is not ready");
      return;
    }

    const apiData = { currency: "INR", amount: 1 };
    const data = await postApiData("school/create-school-session", apiData);
    console.log(data, "schol");

    const payments_session_id = data?.payments_session?.payments_session_id;
    console.log(payments_session_id, "schoo sesccion key");

    setLoading(true);
    try {
      const options = {
        amount: "1",
        currency_code: "INR",
        payments_session_id: payments_session_id,
        currency_symbol: "₹",
        business: "Webtrixz Technologies",
        description: "School Fees.",
        address: {
          name: "mumbai andheri",
          email: "webtrixz@gmail.com",
        },
      };

      const paymentData = await ZPaymentsInstance.requestPaymentMethod(options);
      console.log(options, "gsgffsgsgf");

      console.log("Payment successful:", paymentData);
    } catch (err) {
      console.error(err);
      if (err.code !== "widget_closed") {
        // Handle other error cases
      }
    } finally {
      setLoading(false);
      try {
        await ZPaymentsInstance.close();
        console.log("ZPayments instance closed");
      } catch (closeError) {
        console.error("Error closing ZPayments instance:", closeError);
      }
    }
  };

  return (
    <>
   <div className="school-pay max-w-sm mx-auto my-10 bg-gradient-to-br from-black to-red-500 shadow-lg rounded-2xl border border-gray-300 overflow-hidden transform transition-transform duration-500 hover:scale-105">
  {/* Header */}
  <div className="bg-white py-4 px-6 rounded-t-2xl border-b border-gray-300">
    <h1 className="text-xl font-bold text-gray-800 text-center">
      School Payment Portal
    </h1>
  </div>

  {/* Card Content */}
  <div className="p-8 text-center">
    {/* Title */}
    <h2 className="text-3xl font-extrabold text-white mb-6">
      School Premium Fees <br />
      Payment 2
    </h2>
    {/* Description */}
    <p className="text-lg text-gray-200 mb-6">
      Select the most convenient payment option for your premium school fees and
      complete the process securely.
    </p>
    {/* Payment Amount */}
    <div className="bg-white rounded-lg shadow-md py-4 px-5 mb-6">
      <p className="text-2xl font-bold text-green-600">
        Total Amount: ₹1
      </p>
    </div>
    {/* Pay Button */}
    <Link target="_blank"
  href={loading ? "#" : "/school"}
  onClick={(e) => loading && e.preventDefault()}
  className={`w-full py-3 px-6 rounded-lg shadow-md font-bold text-lg transition-colors duration-300 flex justify-center items-center ${
    loading
      ? "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
      : "bg-white text-green-600 hover:bg-gray-100 hover:text-green-700"
  }`}
>
  {loading ? "Processing..." : `Pay Now ₹ 10`}
</Link>
  </div>

  {/* Footer */}
  <div className="bg-white py-4 text-sm text-gray-600 text-center border-t border-gray-300">
    100% Secure Payment Gateway Powered by Zoho
  </div>
</div>


    </>
  );
};

export default Payment;
