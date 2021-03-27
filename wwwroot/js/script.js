let headerTag = document.getElementById('header')
let footerTag = document.getElementById('footer')


function header() {
    const logoContainer = document.createElement('div')
    logoContainer.setAttribute('class', 'logo__container')
    const logoLink = document.createElement('a')
    logoLink.setAttribute('href', './index.html')
    const logoImg = document.createElement('img')
    logoImg.setAttribute('src', 'wwwroot/image/Asset 1.png')
    logoImg.setAttribute('alt', 'logo')
    logoLink.appendChild(logoImg)
    logoContainer.appendChild(logoLink)

    const nav = document.createElement('nav')
    nav.setAttribute('class', 'main-menu__container')
    const ul = document.createElement('ul')
    const liMenu = [
        {href: './index.html', name: 'Home'},
        {href: '#', name: 'ABOUT US'},
        {href: './contact-us.html', name: 'CONTACT US'},
        {href: './our_services.html', name: 'SERVICES'},
        {href: '#', name: 'OUR PROJECTS'}
    ]
    for (let index = 0; index < liMenu.length; index++) {
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.setAttribute('href', liMenu[index].href)
        let name = document.createTextNode(liMenu[index].name)
        a.appendChild(name)
        li.appendChild(a)
        ul.appendChild(li)
    }

    const ham = document.createElement('img')
    const hamSrc = './wwwroot/image/ham.png'
    const timesSrc = './wwwroot/image/times.png'
    ham.setAttribute('src', hamSrc)
    ham.setAttribute('class', 'ham')
    ham.setAttribute('alt', 'ham')
    ham.addEventListener('click', () => {
        if (ham.alt === 'ham') {
            ham.setAttribute('src', timesSrc)
            ham.setAttribute('alt', 'times')
            headerTag.setAttribute('id', 'mobile-menu-header')
        } else {
            ham.setAttribute('src', hamSrc)
            ham.setAttribute('alt', 'ham')
            headerTag.setAttribute('id', '')
        }
    })
    window.addEventListener('resize', function() {
        if (window.screen.width > 600) {
            headerTag.setAttribute('id', '')
            ham.setAttribute('src', hamSrc)
        }
    })

    nav.append(ul, ham)

    headerTag.append(logoContainer, nav)
}
header()



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
footerTag.innerHTML = footer()