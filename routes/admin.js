const path = require('path');
const express = require('express');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{

    // console.log("in the next middelware");
    // res.send('<form action="/add-product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>')
    res.sendFile(path.join(__dirname,'../' ,'views', 'add-product.html'));
});
 router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

 })


 module.exports=router;
