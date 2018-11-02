/*
 * @Author: yangshuwei
 * @serverRender(服务端渲染)
 * @Date: 2018-10-18 17:44:02 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-11-02 16:36:54
 */
import React from 'react'
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import configureStore from '../../../client/store'
const store = configureStore()

export default async (ctx, next, renderProps) => {
  console.log(renderProps)
  // const comp = renderProps.routes.components[renderProps.routes.components.length - 1].WrappedComponent;
  // return comp.fetch ?
  //     comp.fetch(store.getState(),store.dispatch) :
  //     Promise.resolve();
  const route = renderProps.routes[renderProps.routes.length - 1]
  let prefetchTasks = []
  for (let component of renderProps.components) {
    if (component && component.WrappedComponent && component.WrappedComponent.fetch) {
      
      const _tasks = component.WrappedComponent.fetch(store.getState(), store.dispatch)
      if (Array.isArray(_tasks)) {
        prefetchTasks = prefetchTasks.concat(_tasks)
      } else if (_tasks.then) {
        prefetchTasks.push(_tasks)
      }
    }
  }

  await Promise.all(prefetchTasks)
  await ctx.render('index', {
    title: "测试",
    dev: ctx.app.env === 'development',
    reduxData: JSON.stringify(store.getState()),
    app: renderToString(<Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>)
  })  
}