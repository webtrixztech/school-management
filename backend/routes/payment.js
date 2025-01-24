const express = require("express");
const { createPaymentSession } = require("../controllers/paymentCotroller");

const router = express.Router();


router.post('/create-payment-session',createPaymentSession);



module.exports = router