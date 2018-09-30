const proto = {};

// 创建一个defineGetter函数，参数分别是要代理的对象和对象上的属性
function defineGetter(prop, name) {
  Object.defineProperty(proto, name, {
    enumerable: true,
    // writable: true,
    configurable: true,
    // get: () => this[prop][name],
    get() {
      return this[prop][name];
    },
  });
}
defineGetter('request', 'url');
defineGetter('request', 'path');


function defineSetter(prop, name) {
  Object.defineProperty(proto, name, {
    enumerable: true,
    configurable: true,
    set(val) {
      this[prop][name] = val;
    },
  });
}

defineGetter('response', 'body'); // 同样代理response的body属性
defineSetter('response', 'body'); // 同理

// .......
module.exports = proto;
