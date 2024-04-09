// Express
const express = require('express');
const app = express();
app.use(express.json());

const port = 3100;

// dotENV **** It Only Works On BACKEND ****
require('dotenv').config();

// Body-Parser
const bodyParser = require("body-parser");
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Cors
const cors = require('cors');
app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true // Allow cookies to be sent with the request
}));


// DataBase
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sakib313:sakib313@islamiccluster.sbc761q.mongodb.net/islamicDB?retryWrites=true&w=majority&appName=IslamicCluster");



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

