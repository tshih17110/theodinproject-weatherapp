require('dotenv').config();
const path = require('path');
const express = require('express');
const weatherRoutes = require('./routes/weatherRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', weatherRoutes);
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
