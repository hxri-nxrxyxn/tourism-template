let state = false

const btn = document.getElementById('nav-open')
const nav = document.querySelector('.nav__pop')

console.log(btn, nav, state)

btn.addEventListener('click', () => {
    if (state == true) {
        state = !state
        nav.style.display = "none"
        console.log(state)
    }
    else {
        state = !state
        nav.style.display = "flex"
        console.log(state)
    }
})
