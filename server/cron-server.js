const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const cron = require('node-cron');

app.use(bodyParser.json());
app.use(cors());

app.get('/videos', function(req,res) {
  res.send('hello')
});

cron.schedule('* * * * *',function() {
  console.log("hey");
});

app.listen(3333, () => console.log('port is listen 3333'));