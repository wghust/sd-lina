// 默认路由地址
import DemoPage from './demopage.js';
import Loan from './loan.js';

export default function(VueRouter) {
  return new VueRouter({
    base: __dirname,
    routes: [...DemoPage, ...Loan, {
      path: '*',
      redirect: '/index'
    }]
  });
};