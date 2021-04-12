const navbar = document.getElementById('navbar');
const maxWidth = document.getElementById('max-width');
const dots = document.getElementById('dots');
const hamb = document.getElementById('hamb');
const pageTop = document.getElementById('page-top');
const list = document.getElementById('list');
const chevron = document.getElementById('chevron')

// działanie na scrolowaniu
window.addEventListener('scroll', () => {
    // nawigacja
    if (this.scrollY > 20) {
        navbar.classList.add('active')
        maxWidth.classList.add('active')
    } else {
        navbar.classList.remove('active')
        maxWidth.classList.remove('active')
    }
    // przwijanie do góry
    if (this.scrollY > 200) {
        chevron.classList.add('active')
    } else {
        chevron.classList.remove('active')
    }
})

// hamb i kropki
dots.addEventListener('click', () => {
    console.log('dziala')
    pageTop.classList.toggle('active')
})
hamb.addEventListener('click', () => {
    console.log('dziala')
    list.classList.toggle('active')
})

// rpzewijanie do góry
chevron.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})