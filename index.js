const Koa = require('./lib/application');

const app = new Koa();

// 测试洋葱模型
// app.use(async (ctx, next) => {
//   console.log(1);
//   await next();
//   console.log(2);
// });
// app.use(async (ctx, next) => {
//   console.log(3);
//   const p = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('3.5');
//       resolve();
//     }, 3000);
//   });
//   await p;
//   await next();
//   console.log(4);
// });
// app.use(async (ctx, next) => {
//   console.log(5);
//   await next();
//   console.log(6);
// });

// 测试常用对象
// app.use(async (ctx, next) => {
//   await next();
//   console.log(ctx.req.url);
//   console.log(ctx.request.req.url);
//   console.log(ctx.response.req.url);
//   console.log(ctx.request.url);
//   console.log(ctx.request.path);
//   console.log(ctx.url);
//   console.log(ctx.path);
//   ctx.body = 'hello koa';
// });

// 使用Koa
app.use(async (ctx, next) => {
  await next();
  ctx.body = 'hello koa';
});

app.listen(3000);
