// Channel routes
module.exports = (channelController) => {
    const router = require('express').Router();

    router.get('/', (req, res) => {
        channelController.getList(req, res);
    });

    router.get('/:id(\\d+)', (req, res) => {
        channelController.getChannel(req.params.id, req, res);
    });

    module.exports = router;

    return router;
};
