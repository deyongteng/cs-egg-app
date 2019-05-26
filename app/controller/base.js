'use strict';
const { Controller } = require('egg');
const _ = require('lodash');


class BaseController extends Controller {
    success(data, message) {
        this.ctx.body = {
            status: true,
            data,
            message,
        };
    }

    successPage(rows, count, page, pageSize) {
        const totalPage = Math.ceil(count * 1.0 / pageSize);
        this.ctx.body = {
            status: true,
            rows,
            total: totalPage,
            page,
        };
    }
    fail(data, message) {
        this.ctx.body = {
            status: false,
            data,
            message,
        };
    }
    notFound(data, message) {
        this.ctx.status = 404;
        this.fail(data, message);
    }

    validateFail(fields, message) {
        this.ctx.status = 400;
        this.ctx.body = {
            status: false,
            fields,
            message,
        };
    }
    // notFound(msg) {
    //     msg = msg || 'not found';
    //     this.ctx.throw(404, msg);
    // }

    buildQueryCondition(params, queryFields) {
        const sqlOp = this.app.Sequelize.Op;
        const conditions = {};
        _.each(queryFields, function(val, key) {
            const fieldValue = params[key];
            if (fieldValue) {
                if (val === true) {
                    conditions[key] = fieldValue;
                } else {
                    const column = val.column || key;
                    // 没有op时表示等于操作,有op时对应sequelize.Op
                    // 同一列有多次查询的，必须设置op
                    if (val.op) {
                        conditions[column] = Object.assign({}, conditions[column], {
                            [sqlOp[val.op]]: fieldValue,
                        });
                    } else {
                        conditions[column] = fieldValue;
                    }
                }
            }
        });
        return conditions;
    }

    buildPaginateCondition(page, pageSize) {
        const offset = (page - 1) * pageSize;
        return {
            offset,
            limit: pageSize,
        };
    }

    getPageParams(params) {
        const page = getPositiveNumber(params.page),
            pageSize = getPositiveNumber(params.size, 10);

        return { page, pageSize };
    }

    paramConvert(params, fields) {
        return paramConvert(params, fields);
    }
}
module.exports = BaseController;


const CONVERTS = {
    timestamp(val) {
        return new Date(val).getTime();
    },
    int(val) {
        return parseInt(val);
    },
    stringify(val) {
        return JSON.stringify(val);
    },
    datetime(val) {
        return new Date(parseInt(val));
    },
};

/**
 *
 *
 * @param {any} params 需要进行转换的参数对象
 * @param {any} fields 需要转换的字段名和它们的转换形式 { fieldName: {type: 'datetime', convert: func} }
 *                       type: 支持转换的类型，预先已经注册的类型, 非必填
 *                       convert: 自定义转换的函数, 非必填
 * @return {Object} 转换对象
 **/
function paramConvert(params, fields) {
    let result = {};
    _.each(fields, function(fieldOption, fieldName) {
        if (params.hasOwnProperty(fieldName)) {
            const fieldVal = params[fieldName];
            if (CONVERTS[fieldOption.type]) {
                result[fieldName] = CONVERTS[fieldOption.type](fieldVal);
            } else if (fieldOption.convert) {
                result[fieldName] = fieldOption.convert(fieldVal);
            } else {
                throw `no convert for ${fieldName}`;
            }
        }
    });
    result = Object.assign({}, params, result);
    return result;
}


function getPositiveNumber(value, defaultValue = 1) {
    const parsed = parseInt(value);
    if (value && value > 0) {
        return parsed;
    }
    return defaultValue;
}
