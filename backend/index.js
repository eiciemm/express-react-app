const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3001

var upcaseRouter = require('./routes/upcase');
var calculateRouter = require('./routes/calculate');
var memoRouter = require('./routes/memo');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/upcase', upcaseRouter);
app.use('/calculate', calculateRouter);
app.use('/memo', memoRouter);

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})
