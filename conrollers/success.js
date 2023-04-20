const path = require('path');
exports.productSuccess = (req,res,next)=>{
    // res.send('<h1>Middleware Page</h1>');
    res.sendFile(path.join(__dirname,'../' ,'views', 'success.html'));
}
