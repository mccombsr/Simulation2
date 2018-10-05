require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();

app.use(bodyParser.json());

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Port ${port} is here for all your wants and needs.`)});