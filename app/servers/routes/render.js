/*
 * @Author: yangshuwei 
 * @Date: 2018-10-18 17:43:15 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-10-18 17:48:23
 */
import { match } from 'react-router'
import renderCtrl from '../controllers'

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
    const { redirectLocation, renderProps } = await _match({ routes: require('../../../client/routers'), location: ctx.url })
    if (redirectLocation) {
      ctx.redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
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
