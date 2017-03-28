if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const main = () => {
  let huebackground = 180
  let saturationbackground = 50
  let lightnessbackground = 69
  let alphabackground = 0.5

  const boxdisplay = document.querySelector('.boxdisplay')
  const text = document.querySelector('.text')
  const hueslider = document.querySelector('input[name=hue]')
  hueslider.addEventListener('input', (event) => {
    huebackground = event.target.value
    let color = `hsl(${huebackground}, ${saturationbackground}%, ${lightnessbackground}%)`
    boxdisplay.style.backgroundColor = color
    text.textContent = color
  })
  const saturationslider = document.querySelector('input[name=saturation]')
  saturationslider.addEventListener('input', (event) => {
    saturationbackground = event.target.value
    let color = `hsl(${huebackground}, ${saturationbackground}%, ${lightnessbackground}%)`
    boxdisplay.style.backgroundColor = color
    text.textContent = color
  })
  const lightnessslider = document.querySelector('input[name=lightness]')
  lightnessslider.addEventListener('input', (event) => {
    lightnessbackground = event.target.value
    let color = `hsl(${huebackground}, ${saturationbackground}%, ${lightnessbackground}%)`
    boxdisplay.style.backgroundColor = color
    text.textContent = color
  })
  const alphaslider = document.querySelector('input[name=alpha]')
  alphaslider.addEventListener('input', (event) => {
    alphabackground = event.target.value
    let color = `hsla(${huebackground}, ${saturationbackground}%, ${lightnessbackground}%, ${alphabackground})`
    boxdisplay.style.backgroundColor = color
    text.textContent = color
  })
  let color = `hsla(${huebackground}, ${saturationbackground}%, ${lightnessbackground}%, ${alphabackground})`
  boxdisplay.style.backgroundColor = color
  text.textContent = color
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
