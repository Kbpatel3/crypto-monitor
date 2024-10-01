const express = require('express');
const dotenv = require('dotenv');
const connectDB = require ('./config/db');
const coinbaseRoutes = require('./routes/coinbaseRoutes');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON data
app.use(express.json());

// Routes
app.use('/api/coinbase', coinbaseRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});