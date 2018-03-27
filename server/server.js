const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {mongoose} = require('./mongoose');
const {Videos} = require('./models/videos');
const {Videos1} = require('./models/videos');

const app = express();


app.use(bodyParser.json());
app.use(cors());

app.post('/videos1', (req, res) => {
  console.log(req.body);
  const video = new Videos1({
    videos: req.body.videos,
  });
   
  video.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.post('/videos', (req, res) => {
  console.log(req.body);
  const video = new Videos({
    text: req.body.text,
    number:req.body.number
  });
   
  video.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3100, () => {
  console.log('starting on port 3100');
})