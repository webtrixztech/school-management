const axios = require("axios");

const getAccessToken = async (gatewayConfig) => {
  try {
    const params = {
      refresh_token: gatewayConfig.REFRESH_TOKEN,
      client_id: gatewayConfig.CLIENT_ID,
      client_secret: gatewayConfig.CLIENT_SECRET,
      grant_type: "refresh_token",
    };

    console.log("Params for Access Token:", params);

    const response = await axios.post("https://accounts.zoho.in/oauth/v2/token", null, { params });
    const accessToken = response.data.access_token;

    console.log("Generated Access Token:", accessToken);

    return accessToken;
  } catch (error) {
    console.error("Error generating access token:", error.response?.data || error.message);
    throw new Error("Failed to generate access token");
  }
};

module.exports = { getAccessToken };
