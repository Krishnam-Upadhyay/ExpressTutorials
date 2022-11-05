const express = require('express');
const app = express();
const groceriesRoute = require('./routes/groceries');
const supermarkets = require('./routes/market');



const PORT = 3000;

//
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
})

//passing router
app.use('/api/v1/groceries',groceriesRoute);

app.use('/api/v1/markets',supermarkets);



app.listen(PORT,()=>console.log('server satarted on port number '));

