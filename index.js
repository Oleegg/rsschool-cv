const burger = document.querySelector('.burger')
const body = document.querySelector('body')
const bloor = document.querySelector('.bloor')
const nav = document.querySelector('.nav')
const ul = document.querySelector('.nav__links')


nav.addEventListener('click', (e) => {
    if ((e.target.localName == 'a') && (burger.classList.contains('burger-rot'))) {
        closeMenu()
    }
})
bloor.addEventListener('click', closeMenu)

function closeMenu() {
  body.classList.remove('hidden')
  bloor.classList.remove('show')
  nav.classList.remove('show-nav')
  ul.classList.remove('show-ul')
  burger.classList.remove('burger-rot')
}
burger.addEventListener('click', () => {
  body.classList.toggle('hidden')
  bloor.classList.toggle('show')
  nav.classList.toggle('show-nav')
  ul.classList.toggle('show-ul')
  burger.classList.toggle('burger-rot')
})
