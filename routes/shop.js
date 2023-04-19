const path = require('path');
const express = require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{
    // res.send('<h1>Middleware Page</h1>');
    res.sendFile(path.join(__dirname,'../' ,'views', 'shop.html'));
});

module.exports=router;
