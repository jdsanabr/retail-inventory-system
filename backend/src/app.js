
//simple test route
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Backend is running!'));
module.exports = app;
//
