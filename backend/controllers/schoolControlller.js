const axios = require("axios");

const ZOHO_ACCOUNT_ID = process.env.ZOHO_ACCOUNT_ID;
const ZOHO_REFRESH_TOKEN = "1000.cefe6cd455a4e149ca234c1535c84dbb.d6d37e81d8ac777c0b15a5078168cf21";
const ZOHO_CLIENT_ID = "1000.FTS6LQWHAI6VCHP67WSH71HZBW091I";
const ZOHO_CLIENT_SECRET = "355528be04b59595a5f5c471f732212ee77d5b6e52";
const ZOHO_PAYMENT_API = "https://payments.zoho.in/api/v1/paymentsessions?account_id=60034736461";

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
console.log(response);

    ZOHO_ACCESS_TOKEN = response.data.access_token; // Update the global access token
    console.log("New access token generated:", ZOHO_ACCESS_TOKEN);
    return ZOHO_ACCESS_TOKEN;
  } catch (error) {
    console.error("Error generating access token:", error.response?.data || error.message);
    throw new Error("Failed to generate access token");
  }
};

// Function to create a payment session
exports.createSchoolSession = async (req, res) => {
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