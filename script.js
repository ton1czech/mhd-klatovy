const button = document.querySelector('#darkmode')
const darkModeIcon = document.querySelector('#darkmode-icon')
const cityIcon = document.getElementById('city-icon')
const githubIcon = document.getElementById('github-icon')
const boxiconsIcon = document.getElementById('boxicons-icon')
const instagramIcon = document.getElementsByClassName('instagram-icon')

console.log(instagramIcon)

button.addEventListener('click', () => {
  document.body.classList.toggle('darkmode')

  darkModeIcon.src.match('./assets/moon.svg')
    ? (darkModeIcon.src = './assets/sun.svg')
    : (darkModeIcon.src = './assets/moon.svg')

  cityIcon.src.match('./assets/city-light.svg')
    ? (cityIcon.src = './assets/city-dark.svg')
    : (cityIcon.src = './assets/city-light.svg')

  githubIcon.src.match('./assets/github-light.svg')
    ? (githubIcon.src = './assets/github-dark.svg')
    : (githubIcon.src = './assets/github-light.svg')

  boxiconsIcon.src.match('./assets/boxicons-light.svg')
    ? (boxiconsIcon.src = './assets/boxicons-dark.svg')
    : (boxiconsIcon.src = './assets/boxicons-light.svg')

  instagramIcon[0].src.match('./assets/instagram-light.svg')
    ? (instagramIcon[0].src = './assets/instagram-dark.svg')
    : (instagramIcon[0].src = './assets/instagram-light.svg')
  instagramIcon[1].src.match('./assets/instagram-light.svg')
    ? (instagramIcon[1].src = './assets/instagram-dark.svg')
    : (instagramIcon[1].src = './assets/instagram-light.svg')
  instagramIcon[2].src.match('./assets/instagram-light.svg')
    ? (instagramIcon[2].src = './assets/instagram-dark.svg')
    : (instagramIcon[2].src = './assets/instagram-light.svg')
  instagramIcon[3].src.match('./assets/instagram-light.svg')
    ? (instagramIcon[3].src = './assets/instagram-dark.svg')
    : (instagramIcon[3].src = './assets/instagram-light.svg')
})
