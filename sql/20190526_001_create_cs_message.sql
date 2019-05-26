CREATE TABLE `cs_web`.`cs_message` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
    `user_id`  varchar(48) NOT NULL DEFAULT '' COMMENT 'id',
    `cs_id`  varchar(48) NOT NULL DEFAULT '' COMMENT '客服id',
    `content` text  COMMENT '新内容',
    `created_at` datetime DEFAULT NULL,
    `updated_at` datetime DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


create table `cs_web`.`user_info`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(8) NOT NULL DEFAULT '' COMMENT '账号',
  `user_id` varchar(8) NOT NULL DEFAULT '' COMMENT '账号id',
  `password` varchar(8) NOT NULL DEFAULT '' COMMENT '密码',
  `nickname` varchar(8) NOT NULL DEFAULT '' COMMENT '密码',
  `token`  varchar(30) NOT NULL DEFAULT '' COMMENT 'token',
  `last_login` varchar(30) NOT NULL DEFAULT '' COMMENT '上次访问时间',
  `age` varchar(6) NOT NULL DEFAULT '' COMMENT '名字',
  `sex` varchar(6) NOT NULL DEFAULT '' COMMENT '性别',
  `avatar` varchar(22) NOT NULL DEFAULT '' COMMENT '头像',
  `mobile` varchar(11) NOT NULL DEFAULT '' COMMENT ' 手机号',
  `wechat` varchar(11) NOT NULL DEFAULT '' COMMENT '微信号',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


SELECT * FROM cs_web.user_info;