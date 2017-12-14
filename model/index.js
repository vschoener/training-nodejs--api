
module.exports = (config, logger) => {
    const fs = require('fs');
    const path = require('path');
    const Sequelize = require('sequelize');
    const basename = path.basename(module.filename);
    const db = {};
    const Op = Sequelize.Op;

    let sequelize = new Sequelize(config.database.uri, {
        operatorsAliases: Op, // to avoid deprecated message even if there is
        define: {
            underscored: true
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    });
    sequelize
        .authenticate()
        .then(() => {
            logger.log('info', 'Connection has been established successfully.');
        })
        .catch(err => {
            logger.log('error', 'Unable to connect to the database:', err);
            return null;
        });

    const directories = fs.readdirSync(__dirname).filter(function (file) {
        return fs.statSync(path.join(__dirname, file)).isDirectory();
    });

    directories.forEach(function (directory) {
        let directoryPath = path.join(__dirname, directory);
        fs.readdirSync(directoryPath).
            filter(file =>
                (file.indexOf('.') !== 0) &&
                (file !== basename) &&
                (file.slice(-3) === '.js')
            )
            .forEach(file => {
                const model = sequelize['import'](path.join(directoryPath, file));
                db[model.name] = model;
            });
    });

    Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    return db;
};
