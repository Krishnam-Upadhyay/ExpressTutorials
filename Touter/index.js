const express = require('express');
const app = express();

const PORT = 3000;

//
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
})


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

app.listen(PORT,()=>console.log('server satarted on port number '));


app.get('/groceries',(req,res)=>{
    res.send(gorceryList);
 
})

app.get('/groceries/:item',(req,res)=>{
const {item} = req.params;
const groceryItem = gorceryList.find((g)=>g.item ===item);
res.send(groceryItem);


})

app.post('/groceries',(req,res)=>{
    console.log(req.body);
    gorceryList.push(req.body);
    res.sendStatus(201);

}
)