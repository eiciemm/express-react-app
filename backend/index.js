const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3001

var memoRouter = require('./routes/memo');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/memo', memoRouter);

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})
