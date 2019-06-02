'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {
        router,
        controller,
        io
    } = app;
    router.get('/', controller.home.index);

    // socket.io
    // 上线通知 
    io.of('/').route('CLIENT_ON_LINE', io.controller.chat.onLine);
    io.of('/').route('SERVER_ON_LINE', io.controller.chat.onLine);

    // 离线
    io.of('/').route('CLIENT_OFF_LINE', io.controller.chat.offLine)
    io.of('/').route('SERVER_OFF_LINE', io.controller.chat.offLine)

    // 发送信息
    io.of('/').route('CLIENT_SENDMSG', io.controller.chat.sendMsg);
    io.of('/').route('SERVER_SENDMSG', io.controller.chat.sendMsg);
};