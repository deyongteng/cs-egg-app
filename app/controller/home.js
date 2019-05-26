'use strict';

const Controller = require('egg').Controller;

module.exports = () => {
    const BaseController = require('./base');
    class HomeController extends BaseController {
        async index() {
            const {
                ctx
            } = this;

            await this.ctx.service.userInfo.createAccount();
            ctx.body = 'hi, egg';
        }

    }

    return HomeController
}