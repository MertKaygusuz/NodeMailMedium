const path = require("path");
const mailgunMailService = require('./mailgunMailService');

const mailgunTestMailService = new mailgunMailService(
    process.env.GUN_USER,
    process.env.GUN_PASSWORD,
    process.env.GUN_FROM,
    path.resolve( __dirname, "../views/partials"),
    path.resolve(__dirname, "../views/layouts"),
    "views"
);

module.exports = mailgunTestMailService;