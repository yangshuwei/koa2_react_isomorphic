import path from 'path'
import views from 'koa-views'
// import json from 'koa-json'
// import logger from 'koa-logger'
import koaStatic from 'koa-static'
// import koaOnError from 'koa-onerror'
import convert from 'koa-convert'
// import Bodyparser from 'koa-bodyparser'
import router from './routes'
// const bodyparser = Bodyparser()
const templatePath = path.join(__dirname, './view')
const _public = path.join(__dirname,'../../public')
console.log(_public)
export default (app) => {
  // reg middlewares
  // app.use(bodyparser)
  // app.use(json())
  // app.use(logger())

  // static serve
  app.use(koaStatic(_public))

  // template ejs
  app.use(views(templatePath, { extension: 'ejs' }))

  // router dispatcher
  app.use(router)

  // 500 error
//   koaOnError(app, { template: templatePath + '/500.ejs' })

  // logger
//   if (app.env === 'development') {
//     app.use(async (ctx, next) => {
//       const start = new Date()
//       await next()
//       const ms = new Date() - start
//       console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
//     })
//   }

  // 404
  app.use(async (ctx) => {
    ctx.status = 404
    await ctx.render('404')
  })
}
