const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = 5000;

const ZOHO_AUTH_TOKEN = "1000.81b7a06c0ecc4713abe7d0d77e393318.0adad4708f9d1a817ae10d6e01265c20";
const ZOHO_ACCOUNT_ID = "60034516384";
const ZOHO_PAYMENT_API = `https://payments.zoho.in/api/v1/paymentsessions?account_id=${ZOHO_ACCOUNT_ID}`;

app.post("/create-payment-session", async (req, res) => {
  try {
    const { currency, amount } = req.body;
    if (!currency || !amount) {
      return res.status(400).json({ error: "Currency and amount are required" });
    }

    const config = {
      headers: {
        Authorization: `Zoho-oauthtoken ${ZOHO_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    const payload = {
      currency,
      amount,
    };

    const response = await axios.post(ZOHO_PAYMENT_API, payload, config);

    res.status(200).json(response.data);
  } catch (error) {
    if (error.response) {
      console.error("API Error Response:", error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error("Unexpected Error:", error.message);
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
