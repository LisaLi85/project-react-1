import _ from 'lodash';

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');
  // 注意上面代码中的 _.join，这个 _ 实际上是 lodash 暴露的全局变量。

  return element;
}

document.body.appendChild(component());

// ./node_modules/.bin/webpack app/index.js dist/bundle.js 将 app/index.js 变成 dist/bundle.js