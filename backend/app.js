const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bitcoinRoutes = require('./routes/bitcoinRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON data
app.use(express.json());

// Use the bitcoinRoutes
app.use('/api', bitcoinRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Error connecting to MongoDB', err);
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
