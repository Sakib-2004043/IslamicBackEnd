// Express
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

const port = 3100;

// dotENV **** It Only Works On BACKEND ****
require('dotenv').config();

// Body-Parser
const bodyParser = require("body-parser");
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Cors



// DataBase
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://joseph666:joseph666@islamiccluster.od3jr8o.mongodb.net/test?retryWrites=true&w=majority&appName=IslamicCluster");



const jikirRoute = require('./routes/jikirRoute');
const registrationRoute = require('./routes/registrationRoute');
const salatRoute = require('./routes/salatRoute');

app.use('/api',jikirRoute);
app.use('/api',registrationRoute);
app.use('/api',salatRoute);

app.get("/",(req,res) => {
  res.json("Hellow");
})

app.listen(port,() => {
  console.log(`Server is running at http://localhost:${port}`);
});

