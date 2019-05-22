function component() {
  const element = document.createElement('div');

  //  Lodash is included via a script in index.html
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());