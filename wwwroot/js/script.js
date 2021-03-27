let header = document.getElementsByTagName('header')[0]
let ham = document.getElementsByClassName("ham")[0]
function handleHamClick() {

    let length = ham.src.length
    let match = ham.src.slice(length - 7, length - 4)

    if (match == "ham") {
        ham.src = "./wwwroot/image/times.png"
        // menu.style.display = "flex"
        header.setAttribute('id', 'mobile-menu-header')
    } else {
        ham.src = "./wwwroot/image/ham.png"
        header.setAttribute('id', '')
    }
}

window.addEventListener('resize', function() {
    if (window.screen.width > 600) {
        header.setAttribute('id', '')
        ham.src = "./wwwroot/image/ham.png"
    }
})