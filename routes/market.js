const express = require('express');
const router = express.Router();

const supermarkets =[
    {
        store:"Whole Fodds",
    },
    {
        store:"Trader Krishnam",
    },
    {
        store:"Krishnam's  market",
    }
]

router.get('',(req,res)=>{
    res.send(supermarkets);

})
module.exports =router;