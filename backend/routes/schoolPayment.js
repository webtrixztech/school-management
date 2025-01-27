const express = require("express");
const { createPaymentSession, createSchoolSession } = require("../controllers/schoolControlller");

const router = express.Router();


router.post('/create-school-session',createSchoolSession);



module.exports = router