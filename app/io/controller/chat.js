'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
    async sendMsg() {
        const {
            ctx,
            app
        } = this;
        const nsp = app.io.of('/');
        const message = ctx.args[0] || {}

        var user = await ctx.service.userInfo.createAccount();
        console.log(user)
            // 向客户端广播消息， 在客户端监听broadcast事件就可以获取消息了
            // nsp.emit('broadcast', user)
    }

    async online() {

        const {
            app,
            ctx
        } = this;

        const nsp = app.io.of('/');
        const message = ctx.args[0] || {}
        nsp.emit('broadcast', message)
        console.log("=======上线通知=========")
    }
}

module.exports = DefaultController;

// or async functions

exports.ping = async function() {
    const message = this.args[0];
    await this.socket.emit('res', `Hi! I've got your message: ${message}`);
};