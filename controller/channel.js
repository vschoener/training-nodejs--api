const modelController = require('./model');

module.exports = class ChannelController extends modelController {
    getChannel(channelID, req, res) {
        this.db.api_channel
            .findById(channelID)
            .then(channel => {
                if (!channel) {
                    return this.ressourceNotFound();
                }
                return res.status(200).json(channel);
            })
            .catch(error => res.status(400).send(error));
    }

    getList(req, res) {
        this.db.api_channel
            .findAll()
            .then(channels => {
                return res.status(200).json(channels);
            })
            .catch(error => res.status(400).send(error));
    }
};
