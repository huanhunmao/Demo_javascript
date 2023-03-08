// src/components/index.js
import waring from './Toast/index';

// Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
const install = function (Vue) {
  if (install.installed) return;
  install.installed = true;

  // 将包装好的 warning 挂到Vue的原型上，作为 Vue 实例上的方法
  Vue.prototype.$waring = waring;
}

export default {
  install,
};