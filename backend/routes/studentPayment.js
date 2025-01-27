const express = require("express");
const {  createStudentSession } = require("../controllers/studentCotroller");

const router = express.Router();


router.post('/create-student-session',createStudentSession);



module.exports = router