/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1558872737029_9069';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.sequelize = {
        dialect: 'mysql', // 支持: mysql, mariadb, postgres, mssql
        database: 'cs_web',
        host: '127.0.0.1',
        port: '3306',
        username: 'root',
        password: 'teng123456',
    };


    return {
        ...config,
        ...userConfig,
    };
};