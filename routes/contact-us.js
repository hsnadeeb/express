const path = require('path');
const express = require('express');

const router=express.Router();

router.get('/contact-us',(req,res,next)=>{
    // res.send('<h1>Middleware Page</h1>');
    res.sendFile(path.join(__dirname,'../' ,'views', 'contact-us.html'));
});

module.exports=router;
