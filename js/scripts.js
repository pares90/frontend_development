
// Source: https://codepen.io/atomiks/pen/dgMNwG

const [red, green, blue] = [251, 174, 23]
const section1 = document.querySelector('body')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 950
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})