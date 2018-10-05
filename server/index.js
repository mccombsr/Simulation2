require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then((dbInstance)=>{
    app.set('db', dbInstance);
    console.log(`DB in the house!`)
})
.catch((err)=>{
    console.log(err)
})

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Port ${port} is here for all your wants and needs.`)});