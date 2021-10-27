const firstLetterName = document.querySelector(".name").innerText.slice(0, 1);
const texte = Array.from(document.getElementsByClassName("firstLetterName"));

for (n = 0 ; n < texte.length ; n++) { 
    texte[n].innerHTML = firstLetterName
}

// Selecionar itens menu

const menuItems = Array.from(document.getElementsByClassName('menuItem'));

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', addOrRemoveMenuActive)
})

function addOrRemoveMenuActive(event) {
    const selectedMenuAttribute = event.target.getAttribute('data') 

    menuItems.forEach(menuItem => {
        const menuItemAttribute = menuItem.getAttribute('data')
        if(menuItemAttribute === selectedMenuAttribute) {
            menuItem.classList.add('active')
        } else {
            menuItem.classList.remove('active')
        }
    })
}

// Selecionar itens section

const sectionItems = Array.from(document.getElementsByClassName('sectionItem'));

sectionItems.forEach(sectionItem => {
    sectionItem.addEventListener('click', addOrRemoveSectionActive)
})

function addOrRemoveSectionActive(event) {
    const selectedSectionData = event.target.getAttribute('data')
    
    sectionItems.forEach(sectionItem => {
        const sectionItemData = sectionItem.getAttribute('data')
        if(sectionItemData === selectedSectionData) {
            sectionItem.classList.add('active')
        } else {
            sectionItem.classList.remove('active')
        }
    })
}

// Selecionar itens footer

const footerItems = Array.from(document.getElementsByClassName('footerItem'));

footerItems.forEach(footerItem => {
    footerItem.addEventListener('click', addOrRemoveFooterActive)
})

function addOrRemoveFooterActive(event) {
    const selectedFooterAttribute = event.target.getAttribute('data')

    footerItems.forEach(footerItem => {
        const footerItemAttribute = footerItem.getAttribute('data')
        if(footerItemAttribute === selectedFooterAttribute) {
            footerItem.classList.add('active')
        } else {
            footerItem.classList.remove('active')
        }
    })
}

//Abrir e fechar menu

const menuEl = document.querySelector('.smallerScreenMenuButton');
const lateralMenuEl = document.querySelector('nav');
const footerEl = document.querySelector('.topFooterContainer');
const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.smallerScreenMenuButton');

menuEl.addEventListener('click', handleMenu)

function handleMenu () {
    const lateralMenuClassList = Array.from(lateralMenuEl.classList)
    const isActiveMenu = lateralMenuClassList.find(el => el === 'activeMenu');

    if(isActiveMenu) {
        lateralMenuEl.classList.remove('activeMenu');
        footerEl.classList.remove('activeMenu');
        bodyEl.classList.remove('activeMenu');
        buttonEl.classList.remove('activeMenu');
        return;
    }

    lateralMenuEl.classList.add('activeMenu');
    footerEl.classList.add('activeMenu');
    bodyEl.classList.add('activeMenu');
    buttonEl.classList.add('activeMenu');
}