const navBar = document.querySelector('.nav-bar')
let estadoBotao = false

function toggleBtn() {
    estadoBotao = !estadoBotao

    navBar.classList.remove('active', 'noActive')

    if (estadoBotao) {
        navBar.classList.add('active')
    } else {
        navBar.classList.add('noActive')
    }
}