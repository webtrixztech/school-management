const axios = require("axios");

const ZOHO_REFRESH_TOKEN = "1000.8f02c2ce7dcdb8913bf6cdd127d25501.f620ec1fc21eadb17426df572afc10d5";
const ZOHO_CLIENT_ID = "1000.SXS2T8YXTTBCKH1T0CBNFDDU10KH7V";
const ZOHO_CLIENT_SECRET = "bb7bf100fe2a90123506b60cf77434d95b691592ec";
const ZOHO_PAYMENT_API = "https://payments.zoho.in/api/v1/paymentsessions?account_id=60034516384";

let ZOHO_ACCESS_TOKEN = null; // Ensure the global variable is initialized

// Function to generate a new access token using the refresh token
const getNewAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://accounts.zoho.in/oauth/v2/token",
      null,
      {
        params: {
          code: ZOHO_REFRESH_TOKEN,
          client_id: ZOHO_CLIENT_ID,
          client_secret: ZOHO_CLIENT_SECRET,
          grant_type: "authorization_code", // Correct grant type for using refresh token
        },
      }
    );

    ZOHO_ACCESS_TOKEN = response.data.access_token; // Update the global access token
    console.log("New access token generated:", ZOHO_ACCESS_TOKEN);
    return ZOHO_ACCESS_TOKEN;
  } catch (error) {
    console.error("Error generating access token:", error.response?.data || error.message);
    throw new Error("Failed to generate access token");
  }
};

// Function to create a payment session
exports.createStudentSession = async (req, res) => {
  try {
    const { currency, amount } = req.body;

    // Validate input
    if (!currency || !amount) {
      return res.status(400).json({ error: "Currency and amount are required" });
    }

    // Ensure we have a valid access token
    if (!ZOHO_ACCESS_TOKEN) {
      await getNewAccessToken();
    }

    console.log(ZOHO_ACCESS_TOKEN,"julolii");
    

    const config = {
      headers: {
        Authorization: `Zoho-oauthtoken ${ZOHO_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    const payload = {
      currency,
      amount,
    };

    // Attempt to create a payment session
    let response;
    try {
      response = await axios.post(ZOHO_PAYMENT_API, payload, config);
    } catch (error) {
      // Handle token expiry and retry the request
      if (error.response?.status === 401) {
        console.log("Access token expired. Generating a new one...");
        await getNewAccessToken(); // Generate a new access token
        config.headers.Authorization = `Zoho-oauthtoken ${ZOHO_ACCESS_TOKEN}`;
        response = await axios.post(ZOHO_PAYMENT_API, payload, config); // Retry the request
      } else {
        throw error; // Re-throw if it's not a token expiry issue
      }
    }

    res.status(200).json(response.data);
  } catch (error) {
    if (error.response) {
      console.error("API Error Response:", error.response.data);
      res.status(error.response.status).json(error);
    } else {
      console.error("Unexpected Error:", error.message);
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};
