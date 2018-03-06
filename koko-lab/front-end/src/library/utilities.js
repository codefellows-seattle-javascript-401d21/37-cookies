export const log = (...arguments) => __DEBUG__ ? console.log(...arguments) : undefined;
export const logError = (...arguments) => __DEBUG__ ? console.log(...arguments) : undefined;
export const renderIf = (test, component) => test ? component : undefined;
export const classToggler = options => Object.keys(options).filter(key => !!options[key]).join(' ');
export const map = (child, ...arguments) => Array.prototype.map(child, arguments);
export const filter = (child, ...arguments) => Array.prototype.filter.apply(child, arguments);
export const reduce = (child, ...arguments) => Array.prototype.reduce.apply(child, arguments);