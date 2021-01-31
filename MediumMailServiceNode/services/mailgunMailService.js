const nodemailer =  require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

class MailgunMailService {
  constructor(user, pass, from, partialsDir, layoutsDir, viewPath, defaultLayout = "main") {
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
        service: 'Mailgun',
        auth: {
            user,
            pass
        }
    });

    this._transporter.use("compile", hbs(options));

    this._from = from;
  }
  sendMail({to, subject, template, context, attachments }) {
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

module.exports = MailgunMailService;