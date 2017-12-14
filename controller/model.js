
module.exports = class ModelController {
    constructor(app) {
        this.db = app.get('db');
        this.logger = app.get('logger');
    }

    ressourceNotFound(req, res) {
        return res.status(404).json('Resource not found');
    }
};
