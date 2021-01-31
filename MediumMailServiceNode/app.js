require("dotenv").config();
const bodyParser = require('body-parser');
const express = require('express');
const testMailRoutes = require('./routes/testMailRoutes');
const tokeMiddleware = require('./middlewares/tokenMiddleware.js');

const port = 2424;

const app = express();

app.use(express.static('statics'));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use('/mail', tokeMiddleware, testMailRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));