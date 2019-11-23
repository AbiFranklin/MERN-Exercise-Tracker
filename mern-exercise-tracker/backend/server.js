const express = require('express');
const cors = require('cors');

//Configure environment variables
require('dotenv').config();

//Create server
const app = express();
//Set port
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json()); 

//Listen for server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})