const express = require('express');
const app = express();
const { serverPort } = require('./config/config.json');

// Custom Console Library
const conlog = require('./utils/console');

// Set ejs as view engine for Express
app.set('view engine', 'ejs');

// Custom CSS Implementation
app.use('/public', express.static('public'));

// Add other routing modules
const uiRoutes = require('./routes/ui');
app.use('/ui', uiRoutes);
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.redirect('/ui');
});

app.listen(serverPort, () => {
    conlog.welcome(
        `Oxi-Revised started on port ${serverPort}!\nCreated by Foggy -> https://github.com/Foggy-J/Oxi-Revised\n`
        );
});