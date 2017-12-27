const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];
const logger = require('winston');
const httpLogger = require('morgan');
const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const app = express();
const apiVersionList = ['1'];
logger.level = process.env.LOG_LVL || config['log']['lvl'];
const db = require('./model')(config, logger);

if (db == null) {
    app.exit();
}

app.use(cors());
app.set('config', config);
app.set('db', db);
app.use(httpLogger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Iterate over API version
let router;
for (let version of apiVersionList) {
    router = require('./route/v' + version + '/router')(app);
    app.use('/v' + version, router);
}

app.use('/', router);

// Error handler
app.use((req, res) => {
    return res.status(404).json({ error: { message: 'Ressource cannot be found' } }).end();
});

app.use((err, req, res) => {
    logger.log('error', 'Server error occured', err.stack);
    return res.status(500).json({ error: { message: 'Server error occured' } }).end();
});

app.listen(config.api.port, () => logger.log('info', 'Wonderstream RESTful API server started on ' + config.api.port));


module.exports = app;
