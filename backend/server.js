const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors")
const app = express();
app.use(express.json());

const PORT = 5000;


app.use(cors())
const PaymentRoute = require('./routes/payment')

app.use('/payment', PaymentRoute)





app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
