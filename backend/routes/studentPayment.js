const express = require("express");
const { createSchoolSession } = require("../controllers/schoolControlller");

const router = express.Router();


router.post('/create-student-session',createSchoolSession);



module.exports = router