import Koa from 'koa'
import middlewareRegister from './app/servers/app'

const app = new Koa()
app.env = 'production'
middlewareRegister(app) // reg middleware

app.listen(38080,()=>{
    console.log('服务器启动。。。。。')
});
