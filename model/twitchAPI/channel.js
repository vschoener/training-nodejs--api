module.exports = (sequelize, DataTypes) => {
    let Channel =  sequelize.define('api_channel', {
        metaId: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            field: 'meta_id'
        },
        metaDateAdd: {
            type: DataTypes.DATE,
            field: 'meta_date_add'
        },
        id: DataTypes.BIGINT,
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        email: DataTypes.STRING,
        url: DataTypes.STRING,
        mature: DataTypes.BOOLEAN,
        status: DataTypes.STRING,
        broadcasterLanguage: {
            type: DataTypes.STRING,
            field: 'broadcaster_language'
        },
        displayName: {
            type: DataTypes.STRING,
            field: 'display_name'
        },
        game: DataTypes.STRING,
        language: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        },
        partner: DataTypes.BOOLEAN,
        logo: DataTypes.STRING,
        videoBanner: {
            type: DataTypes.STRING,
            field: 'video_banner'
        },
        profileBanner: {
            type: DataTypes.STRING,
            field: 'profile_banner'
        },
        profileBannerBackgroundColor: {
            type: DataTypes.STRING,
            field: 'profile_banner_bg_color'
        },
        views: DataTypes.BIGINT,
        followers: DataTypes.BIGINT,
        BroadcasterType: {
            type: DataTypes.STRING,
            field: 'broadcaster_type'
        }
    }, {
        timestamps: false,
    });

    return Channel;
};
