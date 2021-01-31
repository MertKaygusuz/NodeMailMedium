const {verify} = require('jsonwebtoken');

module.exports = (req, res, next) =>  {
    try {
        verify(req.headers.authorization.split(" ")[1], process.env.ACCESS_TOKEN_SECRET, {issuer : JSON.parse(process.env.ISSUERS)});
        next();
    } catch (error) {
        //TODO: logging
        console.log(error);
        return res.status(401).json({
            message: 'Authentication failed'
        });
    }
};