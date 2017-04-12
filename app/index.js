import _ from 'lodash';
import j from 'jquery';
import foo from './foo';


function component () {
  // var element = document.createElement('div');
  var element = j('<div></div>');

  /* lodash is required for the next line to work */
  // element.innerHTML = _.join(['Hello','webpack'], ' ');
  // 注意上面代码中的 _.join，这个 _ 实际上是 lodash 暴露的全局变量。
  element.html(_.join(['Hello','webpack'], ' '))

  // return element;
  return element.get(0);
}

document.body.appendChild(component());

// ./node_modules/.bin/webpack app/index.js dist/bundle.js 将 app/index.js 变成 dist/bundle.js

console.log(foo)
console.log(foo());