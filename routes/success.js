const path = require('path');
const express = require('express');

const router=express.Router();

router.get('/success',(req,res,next)=>{
    // res.send('<h1>Middleware Page</h1>');
    res.sendFile(path.join(__dirname,'../' ,'views', 'success.html'));
});

module.exports=router;
