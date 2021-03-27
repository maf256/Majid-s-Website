let headerTag = document.getElementById('header')
let footerTag = document.getElementById('footer')

function footer() {
    return (`
        <div class="image">
            <img src="wwwroot/image/Asset 1.png" alt="Logo">
        </div>      
        <div class="apps__footer">
            <h1>CONTACT US</h1>
            <ul class="social__logo">
                <li><img src="wwwroot/image/Asset 1.png" alt=""></li>
                <li><img src="wwwroot/image/Asset 1.png" alt=""></li>
                <li><img src="wwwroot/image/Asset 1.png" alt=""></li>
            </ul>
        </div>
        <div>
            <ul class="menu">
                <li>ABOUT US</li>
                <li>OUR SERVICES</li>
                <li>OUR PROJECT</li>
            </ul>
        </div>    
    `)
}

function header() {
    return (`
        <div class="logo__container">
            <a href="./index.html"><img src="wwwroot/image/Asset 1.png" alt="Logo"></a>
        </div>
        <nav class="main-menu__container">
            <ul>
                <li><a href="./index.html">HOME</a></li>
                <li>ABOUT US</li>
                <li><a href="./contact-us.html">CONTACT US</a></li>
                <li><a href="./our_services.html">SERVICES</a></li>
                <li>OUR PROJECTS</li>
            </ul>
            <img onclick="handleHamClick()" class="ham" src="./wwwroot/image/ham.png" alt="ham">
        </nav>
    `)
}

headerTag.innerHTML = header()
footerTag.innerHTML = footer()

let ham = document.getElementsByClassName("ham")[0]

function handleHamClick() {

    let length = ham.src.length
    let match = ham.src.slice(length - 7, length - 4)

    if (match == "ham") {
        ham.src = "./wwwroot/image/times.png"
        // menu.style.display = "flex"
        headerTag.setAttribute('id', 'mobile-menu-header')
    } else {
        ham.src = "./wwwroot/image/ham.png"
        headerTag.setAttribute('id', '')
    }
}

window.addEventListener('resize', function() {
    if (window.screen.width > 600) {
        headerTag.setAttribute('id', '')
        ham.src = "./wwwroot/image/ham.png"
    }
})
