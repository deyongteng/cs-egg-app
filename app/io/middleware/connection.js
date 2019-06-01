module.exports = app => {
    return async() => {
        const {
            app
        } = this;

        const nsp = app.io.of('/');
        // 向客户端推送online事件
        nsp.emit('online', '有新成员加入聊天室了')

        await next();
    };

};