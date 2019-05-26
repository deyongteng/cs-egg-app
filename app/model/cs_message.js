'use strict';
module.exports = function(app) {
    const DataTypes = app.Sequelize;
    const CsMessage = app.model.define('cs_message', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        cs_id: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        content: {
            type: DataTypes.STRING(220),
            allowNull: false
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
        tableName: 'cs_message'
    });

    return CsMessage
};