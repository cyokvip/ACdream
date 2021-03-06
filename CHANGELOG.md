## 1.3.0 / 2014-07-05
* statistic页面自己的记录增加高亮
* 修复standings页面不显示自己rating的bug
* ! 使用async代替dfs深层嵌套
* 新增撤销比赛Rating的功能(for admin)
* !!! 模板引擎改为jade，提高渲染性能，改善前端逻辑，修复部分bug
* 移除无用的依赖
* 设置rating为整数避免排名不正确的问题
* 修改rating统计图的显示: 增量为0时显示绿色的+0
* 优化主页的更多按钮
* !! 把socket.io从0.9.x迁移到1.0.x
* ! 更改某些中间件的设置

## 1.2.0 / 2014-06-10
* 代码规范化
* status页面: 对于属于比赛或者隐藏题目的提交，只有提交人、admin、对应题目的manager才能看到其详细参数
* 使用res.locals简化代码并且重构全局消息提醒
* 将上传数据文件大小限制放宽到50m
* 调整rating统计图的显示
* 1天内有回复为hot帖改为8小时内
* 比赛提交代码成功时才跳转到status
* 给所有表增加索引，提高查询性能
* 重构ranklist(ACM规则)，新增standings(rating)

## 1.1.5 / 2014-06-06
* 一天内有回复为hot帖
* 修复自己的金银铜显示不准确的bug
* 更换部分图标并优化弹窗的关闭图标
* 新增修改题目管理员的功能(for admin)
* 比赛discuss的帖子增加时间以及最后回复者的显示

## 1.1.4 / 2014-06-01
* 新增一键添加到比赛并且自动回复的功能(for admin)
* 比赛排名增加浮动表头
* 重构Forum
* 金银铜名额改为10% 20% 30%
* 彻底移除题目难易度相关功能
* problem manager可以切换所出题目的隐藏状态(题目页面以及比赛页面皆可)

## 1.1.3 / 2014-05-28
* 修复比赛排名rejudge后不正确的bug
* 每10秒更新一次排名改为每30秒更新一次
* rejudge增加确认框提醒
* 增加单个提交rejudge功能(for admin)
* 修复透明度设置错误导致IE9及以下看不到按钮的bug
* problem的manager可以看该problem的所有提交代码

## 1.1.2 / 2014-05-25
* 增加个人Rating统计图
* 由于评测机问题，前端暂时屏蔽掉Java
* 修复管理员添加用户到比赛后，用户需要刷新才能提交代码的问题
* 修复比赛查询不了指定用户的提交的bug
* 论坛帖子增加编辑和删除功能，改善回复功能

## 1.1.1 / 2014-05-21
* ckeditor移除样式按钮
* 重构所有上传逻辑
* 对socket增加开发环境和生产环境的配置
* 使用redis存放socket连接
* 使用connect-redis代替connect-mongo存放session
* 添加新题时初始化为隐藏

## 1.1.0 / 2014-05-16
* 比赛可设置罚时
* 自己的排名永远可见
* ranklist查看参赛者时仍可查询
* 提交代码增加%I64警告
* 增加5秒内只能提交1次代码的限制
* 比赛排名每10秒自动更新1次
* onecontest的post失败重连机制改为手动
* 移除CSRF系统
* 修复XSS漏洞
* 修复了不能查询java RE记录的bug
* 修复比赛排名不正确的bug

## 1.0.2 / 2014-05-02
* 增加CSRF防御系统
* 增加"go to top"功能
* 修复admin不能发Discuss的bug
* 改善Discuss的交互
* 为Discuss增加实时提醒

## 1.0.1 / 2014-05-01
* 每250ms拿一次待判提交记录的结果改为每1000ms拿一次
* 增加rating系统
* 修复上传文件后文件名会变的问题
* 首页修复比赛没按时间排序的bug
* 改善登录交互，增加"remember me for a month"功能
* 公告独立出来，方便维护

## 1.0.0 / 2014-04-10
* 重要功能介绍:
* 题目标签管理完全采用Codeforces的模式
* 除了Special Judge模式外，还有TC模式(按照题目要求编写接口-不写main函数)
* VIPContest: public(通过注册参加，类似CF), private(不能注册，只能通过admin添加参赛者)
* admin可以去某个用户的页面(如: user/kidx)赋予/回收加题权限，也可重置该用户的密码
* admin可以在自己的页面(user/admin)重新统计用户AC数和提交数
* admin可以在自己的页面(user/admin)最下方看到hidden的题目
* admin可以在contest页面对题目进行"显示到题库/隐藏"
* admin可以对指定题目进行rejudge(problem页面/contest页面)
* rating系统，还没定怎么做
* admin以及contest的创建者可以在contest的rank页进行打星、广播消息(实时socket通讯)
* admin可以在VIPContest的rank页添加参赛者
