require('dotenv').config();
const express = require('express');
const cors = require('cors');
const users = require('./routes/users');

const app = express();

//sequence of using functions in the pipelines is important
//follow a proper sequence of use methods

//cross origin
app.use(cors());

//for request and response
app.use(express.json());

//base url -- hitted by angular 
//decides the routes where to go in the api 
app.use('/api/user',users);


//set port 
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('listening on port '+ port);
});


//complete url 
//http://localhost:3000/api/user/getAllUser
//http://localhost:3000/api/user/addUser
//http://localhost:3000/api/user/updateUser
//http://localhost:3000/api/user/deleteUser