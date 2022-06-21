const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// Built in middleware
app.use(express.json());

// App routes

app.use('/gods', require('./controllers/gods'));
app.use('/sharks', require('./controllers/sharks'));
app.use('/zodiacs', require('./controllers/zodiacs'));
app.use('/presidents', require('./controllers/presidents'));
app.use('/artists', require('./controllers/artists'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
