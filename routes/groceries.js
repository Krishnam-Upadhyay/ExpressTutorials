const express = require('express');

const router = express.Router();

//groceries List
const gorceryList = [{
    item:'milk',
    quantity:2,
},
{
item:'cereal',
quantity:1,
},
{
item:'potato',
quantity:3,
}]


//getMethod
router.get('',(req,res)=>{
    res.send(gorceryList);
 
})

router.get(':item',(req,res)=>{
const {item} = req.params;
const groceryItem = gorceryList.find((g)=>g.item ===item);
res.send(groceryItem);


})

//Post MEthod
router.post('/',(req,res)=>{
    console.log(req.body);
    gorceryList.push(req.body);
    res.sendStatus(201);

}
)

module.exports = router;

