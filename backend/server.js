const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use(cors());
const PaymentRoute = require("./routes/studentPayment");
const SchoolRoute = require("./routes/schoolPayment");

app.use("/school", SchoolRoute);
app.use("/student", PaymentRoute);

// Root route
app.get("/", (req, res) => {
  res.send(`
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logica Ecommerce API - Routes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f9;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 900px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #e60000; /* Red color */
            text-align: center;
            margin-bottom: 20px;
            font-size: 2em;
        }
        h2 {
            color: #333;
            margin-top: 30px;
            border-bottom: 2px solid #e60000; /* Red underline */
            padding-bottom: 10px;
            font-size: 1.5em;
        }
        ul {
            list-style: none;
            padding-left: 0;
        }
        li {
            font-size: 16px;
            margin: 10px 0;
            line-height: 1.6;
        }
        a {
            color: #e60000; /* Red color */
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .route-group {
            margin-top: 20px;
        }
        .route-title {
            font-weight: bold;
            font-size: 18px;
            color: #333;
        }
        .route-info {
            margin-left: 20px;
            font-size: 14px;
            color: #555;
        }
        .code-snippet {
            background-color: #f8f8f8;
            border: 1px solid #ddd;
            padding: 10px;
            font-size: 14px;
            margin-top: 10px;
            overflow-x: auto;
        }
        .route-group ul {
            padding-left: 20px;
            background-color: #f9f9f9;
            border-left: 4px solid #e60000; /* Red left border */
            padding: 10px 20px;
            margin: 10px 0;
            border-radius: 4px;
        }
        .route-group ul li {
            font-size: 16px;
        }
        .route-group ul li a {
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>School2 Managemenent System API Routes</h1>
        <p>The following are the available API routes for the School Managemenent system:</p>

     

   

    </div>
</body>
</html>


  `);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
