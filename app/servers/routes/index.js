/*
 * @Author: yangshuwei 
 * @Date: 2018-10-18 17:41:49 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-11-02 18:07:34
 */
import render from './render'
export default async (ctx, next) => {
    // api server through koa-router
    
    // others react-router to render
    await render(ctx, next)
}