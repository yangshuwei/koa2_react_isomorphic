/*
 * @Author: yangshuwei 
 * @Date: 2018-10-18 17:43:15 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-10-30 17:12:25
 */
import { match } from 'react-router'
import renderCtrl from '../controllers'
import routes from '../../../client/routers'

function _match (location) {
  return new Promise((resolve, reject) => {
    match(location, (error, redirectLocation, renderProps) => {
      if (error) {
        return reject(error)
      }
      resolve({redirectLocation, renderProps})
    })
  })
}
export default async (ctx, next) => {
  try {
    const { redirectLocation, renderProps } = await _match({ routes: routes, location: ctx.url })
    if (redirectLocation) {
      ctx.redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      console.log(ctx.url)
      await renderCtrl(ctx, next, renderProps)
    } else {
      await next()
    }
  } catch (e) {
    console.error('Server-Render Error Occurs: %s', e.stack)
    await ctx.render('500', {
      msg: ctx.app.env === 'development' ? e.message : false
    })
  }
}
