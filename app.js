const express = require('express');
const bodyParser=require('body-parser');
const app=express();
const path = require('path');
const apdminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const successRoutes=require('./routes/success');
const contactRoutes=require('./routes/contact-us');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(apdminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);




app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(4000);
