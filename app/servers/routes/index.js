/*
 * @Author: yangshuwei 
 * @Date: 2018-10-18 17:41:49 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-10-18 17:42:44
 */
export default async (ctx, next) => {
    // api server through koa-router
    if (ctx.path.match(/^\/api/)) {
      return await require('./api').routes()(ctx, next)
    }
    // others react-router to render
    await require('./render')(ctx, next)
}