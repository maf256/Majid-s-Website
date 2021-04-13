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
    const logoContainer = document.createElement('div');
    logoContainer.setAttribute("class","image");

    const footerLogo = document.createElement('img');
    footerLogo.setAttribute("src","wwwroot/image/Asset 1.png");
    footerLogo.setAttribute("alt","Logo");

    logoContainer.appendChild(footerLogo);

    const socialContainer = document.createElement('div');
    socialContainer.setAttribute("class","apps__footer");

    const socialHeader = document.createElement('h1');
    socialHeader.innerHTML = "CONTACT US";
    
    const socialLogos = document.createElement('ul');
    socialLogos.setAttribute("class","social__logo");
    
    const  liSocialLogos= [
        {src: "wwwroot/image/instagram.png", alt:"img1"},
        {src: "wwwroot/image/facebook.png", alt:"img1"},
        {src: "wwwroot/image/email.png",alt:"img1"}];
    
    for (let i=0;i < liSocialLogos.length; i++) {
        const liSocialLogo = document.createElement('li');

        const liImg = document.createElement('img');
        liImg.setAttribute("src",liSocialLogos[i].src);
        liImg.setAttribute("alt",liSocialLogos[i].alt);
        
        liSocialLogo.appendChild(liImg);
        socialLogos.appendChild(liSocialLogo);
    }
    
    socialContainer.appendChild(socialHeader);
    socialContainer.appendChild(socialLogos);
    
    const useFullLinksContainer = document.createElement('div');
    
    const useFullLinksUl = document.createElement('ul');
    useFullLinksUl.setAttribute("class", "menu");

    const liLinks = ["ABOUT US","OUR SERVICES","OUR PROJECT"];
    liLinks.forEach(element => {
        const liLink = document.createElement('li');
        liLink.innerHTML = element ;

        useFullLinksUl.appendChild(liLink);   
    });
    
    useFullLinksContainer.appendChild(useFullLinksUl);

    footerTag.appendChild(logoContainer);
    footerTag.appendChild(socialContainer);
    footerTag.appendChild(useFullLinksContainer);

}

footer ();



// *********** My Contacts ***********

const main = document.getElementById("myContactsMainPage")

function getAllFormData() {
    return fetch('http://localhost:3000/form/save')
    .then(response => response.json())
}

function createTable() {
    const table = document.createElement("table")
    const rowHeader = document.createElement("tr")
    table.appendChild(rowHeader)
    main.appendChild(table)

    getAllFormData()
    .then(formData => {
        // Header
        for(const key in formData[0]) {
            const th = document.createElement("th")
            const text = document.createTextNode(key)
            th.appendChild(text)
            rowHeader.appendChild(th)
        }
        // Rows
        formData.forEach(rowData => {
            // Row
            const row = document.createElement("tr")
            for(const key in rowData) {
                const td = document.createElement("td")
                const text = document.createTextNode(rowData[key])
                td.appendChild(text)
                row.appendChild(td)
            }
            table.appendChild(row)
        })
    })
}

createTable()