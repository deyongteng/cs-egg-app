'use strict';
module.exports = function(app) {
    const DataTypes = app.Sequelize;
    const UserInfo = app.model.define('user_info', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.STRING(8),
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING(8),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(8),
            allowNull: false
        },
        last_login: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        nickname: {
            type: DataTypes.STRING(8),
            allowNull: true
        },
        token: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        avatar: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        age: {
            type: DataTypes.STRING(6),
            allowNull: true
        },
        sex: {
            type: DataTypes.STRING(6),
            allowNull: true
        },
        mobile: {
            type: DataTypes.STRING(11),
            allowNull: true
        },
        wechat: {
            type: DataTypes.STRING(11),
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        // timestamps: false,
        tableName: 'user_info'
    });

    // 关联 UsersInfo 表
    UserInfo.associate = function() {
        UserInfo.hasMany(app.model.CsMessage, {
            foreignKey: 'user_id',
            sourceKey: 'user_id',
        });
    };

    return UserInfo;
};