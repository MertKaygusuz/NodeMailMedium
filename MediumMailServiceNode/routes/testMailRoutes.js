const denemeMailsController = require('../controllers/mailTest/denemeMailsController');

const router = require('express-promise-router')();

router.post('/mailTest', denemeMailsController.mailTest);
router.post('/mailgunMailTest', denemeMailsController.mailgunMailTest);

module.exports = router;