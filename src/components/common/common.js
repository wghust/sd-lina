import DateFormat from './libs/dateformat';

const commonFunc = {
  dateFormat: DateFormat
};

const commonHandle = (Vue) => {
  Vue.prototype.$common = commonFunc;
  Vue.Common = commonFunc;
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(commonHandle);
}

export default commonHandle;