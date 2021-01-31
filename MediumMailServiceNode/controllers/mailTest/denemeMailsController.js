const testMailService = require('../../services/testMailService');
const mailgunTestMailService = require('../../services/mailgunTestMailService');
const testMailAttachments = require('../../mailDefaultAttachments/testMailAttachments');

const mailTest = async (req, res) => {
    try {
      const mailInfo = {
        to: req.body.GonderilecekAdres,
        subject: req.body.Subject,
        template: "testMail",
        context: req.body,
        attachments: testMailAttachments
      };

        await testMailService.sendMail(mailInfo);
        
        console.log("email sent");
        res.status(200).send("Mail başarıyla gönderildi");
      } catch (e) {
        //logging
        console.log(e);
        res.status(500).send("Internal Error");
      }
  }

  const mailgunMailTest = async (req, res) => {
    try {
        const mailInfo = {
          to: req.body.GonderilecekAdres,
          subject: req.body.Subject,
          template: "testMail",
          context: req.body,
          attachments: testMailAttachments
        };
        
        await mailgunTestMailService.sendMail(mailInfo);
        
        console.log("email sent");
        res.status(200).send("Mail başarıyla gönderildi");
      } catch (e) {
        //logging
        console.log(e);
        res.status(500).send("Internal Error");
      }
  }

  module.exports = {
    mailTest,
    mailgunMailTest
  }