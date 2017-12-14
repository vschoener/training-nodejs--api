module.exports = (app) => {
    const channelControllerClass = require('../../controller/channel');
    const router = require('express').Router();

    router.get('/', (req, res) => res.json({'status':'OK', 'API version': 'v1'}));

    // Prepare Channel Controller to dispatch request
    let channelController = new channelControllerClass(app);
    router.use('/channels', require('./channel')(channelController));

    return router;
};
