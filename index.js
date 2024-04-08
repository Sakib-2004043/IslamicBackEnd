// Express
const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;

// dotENV **** It Only Works On BACKEND ****
require('dotenv').config();

// Body-Parser
const bodyParser = require("body-parser");
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Cors
const cors = require('cors');
app.use(cors({
  origin: "*"
}));

// DataBase
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sakib313:sakib313@islamicweb.noosdoq.mongodb.net/test?retryWrites=true&w=majority&appName=IslamicWeb");



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
  console.log(`Server is running`);
});

