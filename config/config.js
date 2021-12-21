require('dotenv').config();

//Setting CORS Policy
exports.CORS = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Authorization,Access-Control-Request-Method, Access-Control-Request-Headers,Access-Control-Allow-Origin");
    next();
};