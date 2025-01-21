import { useState, useEffect } from 'react';

const Payment = () => {
    const [loading, setLoading] = useState(false);
    const [ZPaymentsInstance, setZPaymentsInstance] = useState(null);

    useEffect(() => {
        // Ensure this is only executed on the client-side
        if (typeof window !== 'undefined') {
            // Check if the ZPayments script is already loaded
            if (!window.ZPayments) {
                const script = document.createElement('script');
                script.src = "https://static.zohocdn.com/zpay/zpay-js/v1/zpayments.js";
                script.async = true;

                // Wait for the script to load
                script.onload = () => {
                    if (window.ZPayments) {
                        const config = {
                            account_id: "60034516384",
                            domain: "IN",
                            otherOptions: {
                                api_key: "1003.fc0c27e5e5a242cec477dcd9b3f67079.2d0043c9b25dcf75880ff00e14a67566",
                            },
                        };
                        try {
                            const instance = new window.ZPayments(config);
                            setZPaymentsInstance(instance);
                            console.log('ZPayments instance created');
                        } catch (error) {
                            console.error('Error initializing ZPayments:', error);
                        }
                    }
                };

                script.onerror = () => {
                    console.error('Error loading ZPayments script');
                };

                // Append the script to the body
                document.body.appendChild(script);
            } else {
                console.log('ZPayments SDK is already loaded');
            }
        }
    }, []);

    const handlerSubmit = async () => {
        if (!ZPaymentsInstance) {
            console.error('ZPayments instance is not ready');
            return;
        }

        setLoading(true);
        try {
            const options = {
                amount: "1",
                currency_code: "INR",
                payments_session_id: "2000000012001",
                currency_symbol: "₹",
                business: "Webtrixz Technologies",
                description: "School Management Software.",
                address: {
                    name: "Canon",
                    email: "webtrixz@gmail.com",
                },
            };
            const paymentData = await ZPaymentsInstance.requestPaymentMethod(options);
            console.log(options,'gsgffsgsgf');
            
            console.log('Payment successful:', paymentData);
        } catch (err) {
            console.error(err);
            if (err.code !== 'widget_closed') {
                // Handle other error cases
            }
        } finally {
            setLoading(false);
            try {
                await ZPaymentsInstance.close();
                console.log('ZPayments instance closed');
            } catch (closeError) {
                console.error('Error closing ZPayments instance:', closeError);
            }
        }
    };

    return (

        <>
      






















<div className="school-pay max-w-sm mx-auto bg-gradient-to-br from-green-600 to-blue-400 shadow-2xl rounded-2xl border border-gray-300 overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="p-6 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
        Pay for School Fees
        </h2>
        <p className="text-lg text-gray-100 mb-6">
        Select the most convenient fee payment option for your school and pay securely with ease.
        </p>
        <div className="bg-white rounded-lg shadow-md py-2 px-2 mb-6">
          <p className="text-2xl font-bold text-green-600"> Total Amount ₹1</p>
        </div>
        <button
           onClick={handlerSubmit}
           disabled={loading}
          className="w-full bg-white text-green-600 font-bold py-3 px-5 rounded-lg shadow-md hover:bg-gray-100 hover:text-green-700 transition duration-300 "
        >
        {loading ? "Processing..." : `Pay Now ₹ 1`}
        </button>
      </div>
      <div className="bg-white py-3 text-sm text-gray-600 text-center">
        100% Secure Payment Gateway Powered by Zoho
      </div>
    </div>
        
      </>
      
      
    );
};

export default Payment;