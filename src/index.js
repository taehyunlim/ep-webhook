import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import printMe from './print.js'

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  // Bundle: Lodash
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('test')

  // Asset Management: Image
  const iconImage = new Image()
  iconImage.src = Icon
  element.appendChild(iconImage)

  // Output Management
  btn.innerHTML = 'Click and check console'
  btn.onclick = printMe;
  element.append(btn);

  return element;
}

document.body.appendChild(component())