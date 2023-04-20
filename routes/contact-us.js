
const express = require('express');
const contactUsController=require('../conrollers/contact-us')
const router=express.Router();

router.get('/contact-us',contactUsController.contactPage);

module.exports=router;
