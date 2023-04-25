const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
const User = require('./models/user.js')

const app = express();
app.use(express.json())
dotenv.config();

app.use(require('./routes/findUser.js'))

mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true    
    })
    .then(app.listen(5000, ()=>{console.log('The server is working on localhost:5000')}))
    .catch((err)=>(console.log(err)))