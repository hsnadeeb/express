const path = require('path');
const express = require('express');
const successController=require('../conrollers/success');
const router=express.Router();

router.get('/success', successController.productSuccess);

module.exports=router;
