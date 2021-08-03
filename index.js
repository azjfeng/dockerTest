const Koa = require('koa');
const App = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World';
  });

app.listen('3000', () => {
    console.log('http://127.0.0.1:3000')
})