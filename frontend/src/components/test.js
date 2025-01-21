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
                business: "Zylker",
                description: "Purchase of Zylker electronics.",
                address: {
                    name: "Canon",
                    email: "canonbolt@zylker.com",
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
        <div>
            <button onClick={handlerSubmit} disabled={loading}>
                 {loading ? 'Processing...' : 'Pay Now'}
            </button>
        </div>
    );
};

export default Payment;