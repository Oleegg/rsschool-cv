const burger = document.querySelector('.burger')
const body = document.querySelector('body')
const nav = document.querySelector('.nav')

nav.addEventListener('click', (e) => {
    if ((e.target.localName == 'a') && (burger.classList.contains('burger-rot'))) {
        closeMenu()
    }
})
function closeMenu() {
    nav.classList.remove('show-nav')
    burger.classList.remove('burger-rot')
}
burger.addEventListener('click', () => {
    nav.classList.toggle('show-nav')
    burger.classList.toggle('burger-rot')
})