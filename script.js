const button = document.querySelector('#darkmode')
const icon = document.querySelector('#darkmode-icon')

button.addEventListener('click', () => {
  document.body.classList.toggle('darkmode')

  if (icon.src.match('./assets/moon.svg')) {
    icon.src = './assets/sun.svg'
  } else {
    icon.src = './assets/moon.svg'
  }
})
