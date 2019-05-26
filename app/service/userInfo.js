'use strict';

// const Controller = require('egg').Controller;

// module.exports = app => {
//     const {
//         UserInfo,
//         csMessage
//     } = app.model;

//     class UserInfoController extends Controller {
//         async create() {

//             // console.log(UserInfo)
//             // const result = await 
//         }
//     }

//     return UserInfoController
// }

'use strict';

const Service = require('egg').Service;

module.exports = app => {
    const {
        UserInfo,
        CsMessage
    } = app.model;

    class UserInfoService extends Service {
        async createAccount() {
            // const result = await UserInfo.findAll({
            //     raw: true,
            //     where: {
            //         user_name: 'jacktest'
            //     },
            //     include: [{
            //         model: CsMessage
            //     }]
            // });

            // return result;
        }
    }

    return UserInfoService;
}