const path = require('path');
exports.contactPage = (req,res,next)=>{
    // res.send('<h1>Middleware Page</h1>');
    res.sendFile(path.join(__dirname,'../' ,'views', 'contact-us.html'));
}
