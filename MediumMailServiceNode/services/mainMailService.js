const nodemailer =  require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

class MainMailService {
  constructor(host, port, user, password, from, partialsDir, layoutsDir, viewPath, defaultLayout = "main") {
    const options = {
      viewEngine: {
        defaultLayout,
        partialsDir,
        layoutsDir,
        extname: ".hbs"
      },
      extName: ".hbs",
      viewPath
    };

    this._transporter = nodemailer.createTransport({
      host,
      port,
      auth: {
        user: user,
        pass: password
      }
    });

    this._transporter.use("compile", hbs(options));

    this._from = from;
  }
  sendMail({to, subject, template, context, attachments}) {
    return this._transporter.sendMail({
        to,
        from: this._from,
        subject,
        template,
        context,
        attachments
    });
  }
}

module.exports = MainMailService;