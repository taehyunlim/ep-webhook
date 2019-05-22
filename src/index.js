import _ from 'lodash'
import './style.css'
import Icon from './icon.png'

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('test')

  const iconImage = new Image()
  iconImage.src = Icon;

  element.appendChild(iconImage)

  return element;
}

document.body.appendChild(component());