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

    config.io = {
        init: {}, // passed to engine.io
        namespace: {
            // 命名空间
            '/': {
                connectionMiddleware: [], // 这个是连接中间件， 只在connection的时候触发
                packetMiddleware: [], // 这个会在每次消息的时候触发
            },
            '/example': {
                connectionMiddleware: [],
                packetMiddleware: [],
            },
        },
        redis: {
            host: '127.0.0.1',
            port: 6379
        }
    };
    // config.io = {
    //     init: {}, // passed to engine.io
    //     namespace: {
    //         '/': {
    //             connectionMiddleware: [],
    //             packetMiddleware: [],
    //         },
    //     },
    // }

    return {
        ...config,
        ...userConfig,
    };
};