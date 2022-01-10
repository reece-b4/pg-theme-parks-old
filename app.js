const express = require('express');
const {
  getParks,
  getParkById,
  removeParkById,
  postPark,
  patchParkById,
} = require('./controllers/parks');

const app = express();
app.use(express.json());

app.get('/api/parks', getParks);
app.post('/api/parks', postPark);

app.get('/api/parks/:park_id', getParkById);
app.delete('/api/parks/:park_id', removeParkById);
app.patch('/api/parks/:park_id', patchParkById);

app.all('/*', (req, res) => {
  res.status(404).send({ msg: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.sendStatus(500);
});

module.exports = app;
