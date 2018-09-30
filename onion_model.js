// 手动实现 模仿KOA的洋葱模型
const middlewares = [];

middlewares.push(async (next) => {
  console.log(1);
  await next();
  console.log(2);
});

middlewares.push(async (next) => {
  console.log(3);
  const p = new Promise((resolve) => {
    setTimeout(() => {
      console.log('3.5');
      resolve();
    }, 3000);
  });
  await p;
  await next();
  console.log(4);
});

middlewares.push(async (next) => {
  console.log(5);
  await next();
  console.log(6);
});

middlewares.push(async (next) => {
  console.log(7);
  await next();
  console.log(8);
});

// 洋葱模型的实现
async function dispatch(index) {
  if (index === middlewares.length) return;
  const middleware = middlewares[index];
  await middleware(() => dispatch(index + 1));
}

// 执行
dispatch(0).then(() => {
  console.log('ok');
});
