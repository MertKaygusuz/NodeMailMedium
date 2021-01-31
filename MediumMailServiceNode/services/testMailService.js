const path = require("path");
const mainMailService = require('./mainMailService');

const testMailService = new mainMailService(process.env.SMTP_HOST, 
    process.env.SMTP_PORT, 
    process.env.SMTP_USER, 
    process.env.SMTP_PASSWORD,
    process.env.FROM,
    path.resolve( __dirname, "../views/partials"),
    path.resolve(__dirname, "../views/layouts"),
    "views"
);

module.exports = testMailService;






