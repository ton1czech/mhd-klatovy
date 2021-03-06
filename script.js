const button = document.getElementById('darkmode')
const darkModeIcon = document.getElementById('darkmode-icon')
const cityIcon = document.getElementById('city-icon')
const githubIcon = document.getElementById('github-icon')
const boxiconsIcon = document.getElementById('boxicons-icon')
const instagramIcon = document.getElementsByClassName('instagram-icon')
const htmlIcon = document.getElementById('html-icon')
const cssIcon = document.getElementById('css-icon')
const sassIcon = document.getElementById('sass-icon')
const jsIcon = document.getElementById('js-icon')
const dataIcon = document.getElementById('data-icon')
const vsIcon = document.getElementById('vs-icon')
const powerbiIcon = document.getElementById('powerbi-icon')
const iconscoutIcon = document.getElementById('iconscout-icon')
const mapIcon = document.getElementById('map-icon')
const spreadsheetIcon = document.getElementById('spreadsheet-icon')
const homeLink = document.getElementById('home-link')
const aboutLink = document.getElementById('about-link')
const mapLink = document.getElementById('map-link')

setDarkMode = () => {
  document.body.classList.toggle('darkmode')

  // header
  darkModeIcon.src.match('./assets/moon.svg')
    ? (darkModeIcon.src = './assets/sun.svg')
    : (darkModeIcon.src = './assets/moon.svg')

  // footer
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

  iconscoutIcon.src.match('./assets/iconscout-light.svg')
    ? (iconscoutIcon.src = './assets/iconscout-dark.svg')
    : (iconscoutIcon.src = './assets/iconscout-light.svg')

  mapIcon.src.match('./assets/map-light.svg')
    ? (mapIcon.src = './assets/map-dark.svg')
    : (mapIcon.src = './assets/map-light.svg')

  spreadsheetIcon.src.match('./assets/spreadsheet-light.svg')
    ? (spreadsheetIcon.src = './assets/spreadsheet-dark.svg')
    : (spreadsheetIcon.src = './assets/spreadsheet-light.svg')

  // about page
  try {
    htmlIcon.src.match('./assets/html-light.svg')
      ? (htmlIcon.src = './assets/html-dark.svg')
      : (htmlIcon.src = './assets/html-light.svg')

    cssIcon.src.match('./assets/css-light.svg')
      ? (cssIcon.src = './assets/css-dark.svg')
      : (cssIcon.src = './assets/css-light.svg')

    sassIcon.src.match('./assets/sass-light.svg')
      ? (sassIcon.src = './assets/sass-dark.svg')
      : (sassIcon.src = './assets/sass-light.svg')

    jsIcon.src.match('./assets/js-light.svg')
      ? (jsIcon.src = './assets/js-dark.svg')
      : (jsIcon.src = './assets/js-light.svg')

    dataIcon.src.match('./assets/data-light.svg')
      ? (dataIcon.src = './assets/data-dark.svg')
      : (dataIcon.src = './assets/data-light.svg')

    vsIcon.src.match('./assets/vs-light.svg')
      ? (vsIcon.src = './assets/vs-dark.svg')
      : (vsIcon.src = './assets/vs-light.svg')

    powerbiIcon.src.match('./assets/powerbi-light.svg')
      ? (powerbiIcon.src = './assets/powerbi-dark.svg')
      : (powerbiIcon.src = './assets/powerbi-light.svg')
  } catch (error) {}
}

button.addEventListener('click', () => {
  setDarkMode()
})

themePreference = () => {
  window.matchMedia('(prefers-color-theme: dark)').matches ? setDarkMode() : null
}

document.onload = themePreference()
