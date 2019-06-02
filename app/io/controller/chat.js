'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {

    // 上线通知
    async onLine() {
        const {
            app,
            ctx
        } = this;

        const nsp = app.io.of('/');
        const data = ctx.args[0] || {}

        // 如果是访客端上线，就通知客服端
        if (data.type === 'CLIENT_ON_LINE') {
            nsp.emit('SYSTEM_MESSAGE_SERVER', data)
        }
        // 如果是客服端上线，就通知访客端
        else if (data.type === 'SERVER_ON_LINE') {
            nsp.emit('SYSTEM_MESSAGE_CLIENT', data)
        }

    }

    async offLine() {
        const {
            ctx,
            app
        } = this;
        const nsp = app.io.of('/');
        const data = ctx.args[0] || {}

        console.log("===============")
        console.log(data)

    }

    // 发送信息
    async sendMsg() {
        const {
            ctx,
            app
        } = this;

        const nsp = app.io.of('/');
        const data = ctx.args[0] || {};
        const {
            type,
            userId,
            toUserId,
            message
        } = data;

        if (!userId) new Error("请传入用户id");
        if (!toUserId) new Error("请传入客服id");

        // 发送对应信息
        nsp.emit(type, {
            userId: userId,
            toUserId: toUserId,
            message: message
        })
    }
}

module.exports = DefaultController;