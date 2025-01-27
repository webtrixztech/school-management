const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors")
const app = express();
app.use(express.json());

const PORT = process.env.PORT;


app.use(cors())
const PaymentRoute = require('./routes/studentPayment')
const SchoolRoute = require('./routes/schoolPayment')

app.use('/student', PaymentRoute)
app.use('/school', SchoolRoute)





app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
