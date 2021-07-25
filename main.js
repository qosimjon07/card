function createCard(title, src) {
    const card = document.createElement('div')
    card.classList.add('card')

    const cardAvatar = document.createElement('div')
    cardAvatar.classList.add('card-avatar')

    const img = document.createElement('img')
    img.src = src

    cardAvatar.append(img)

    const cardTitle = document.createElement('p')
    cardTitle.innerText = title;
    cardTitle.classList.add('card-title')

    const cardAction = document.createElement('div')
    cardAction.classList.add('card-action')

    const button = document.createElement('button')
    button.innerText = 'Boshlash';
    button.onclick = toggleOverlay

    cardAction.append(button)

    card.append(cardAvatar)
    card.append(cardTitle)
    card.append(cardAction)

    return card;
}

const card1 = createCard('Jismoniy shaxslar uchun', './avatar.svg'); 
const card2 = createCard('Yuridik shaxslar uchun', './avatar.svg'); 
const card3 = createCard('maishiy auto texnika', './avatar.svg'); 
const card4 = createCard('oldi sotti', './avatar.svg'); 

const container = document.getElementsByClassName('container')[0];

container.append(card1)
container.append(card2)
container.append(card3)
container.append(card4)

function jshModul(idMod , title, passport , jshir) {

    const modfade = document.createElement('div');
    modfade.classList.add('modal' , 'fade');
    modfade.id = idMod
    
    const modDialog = document.createElement('div')
    modDialog.classList.add('modal-dialog')

    const modContent = document.createElement('div')
    modContent.classList.add('modal-content')

    const containerMod = document.createElement('div')
    containerMod.classList.add('container-mod')

    const jsModTitle = document.createElement('p')
    jsModTitle.classList.add('js-mod-title')
    jsModTitle.innerText = title

    const numTextTitle = document.createElement('p')
    numTextTitle.classList.add('num-text-title')
    numTextTitle.innerText = passport

    const modInput = document.createElement('input')
    modInput.classList.add('mod-input')
    modInput.type = 'text' 

    const modTitle = document.createElement('p')
    modTitle.classList.add('mod-title')
    modTitle.innerText = jshir

    const modInput2 = document.createElement('input')
    modInput2.classList.add('mod-input')
    modInput2.type = 'number'

    const modButton = document.createElement('button')
    modButton.classList.add('mod-button')
    modButton.innerText = 'Yuklash'

    containerMod.append(jsModTitle, numTextTitle, modInput)
    containerMod.append(modTitle, modInput2, modButton)
    modContent.append(containerMod)
    modDialog.append(modContent)
    modfade.append(modDialog)

    return modfade
}

function yshModul(idMod , title , jshir) {

    const modfade = document.createElement('div');
    modfade.classList.add('modal' , 'fade');
    modfade.id = idMod;
    
    const modDialog = document.createElement('div')
    modDialog.classList.add('modal-dialog')

    const modContent = document.createElement('div')
    modContent.classList.add('modal-content')

    const containerMod = document.createElement('div')
    containerMod.classList.add('container-mod')

    const jsModTitle = document.createElement('p')
    jsModTitle.classList.add('js-mod-title')
    jsModTitle.innerText = title

    const modTitle = document.createElement('p')
    modTitle.classList.add('mod-title')
    modTitle.innerText = jshir;

    const modInput2 = document.createElement('input')
    modInput2.classList.add('mod-input')
    modInput2.type = 'text'

    const modButton = document.createElement('button')
    modButton.classList.add('mod-button')
    modButton.innerText = 'Yuklash'

    containerMod.append(jsModTitle , modTitle , modInput2 , modButton)
    modContent.append(containerMod)
    modDialog.append(modContent)
    modfade.append(modDialog)

    return modfade
}

const modSection = document.getElementsByClassName('modal-section')[0];


const JShMod = jshModul('jsh-mod' , 'Jismoniy shaxslar uchun' , 'Passport seriya raqami' , 'JSHIR');
const YShMod = yshModul('YSh-mod' , 'Yuridik shaxslar uchun' , 'STIR');
const AutoMod =jshModul('Auto-mod' , 'Automobillar uchun' , 'TEX passport raqami' , 'STIR')
const UyJoyMod = yshModul('UyJoy-mod' , 'Uy-joy uchun' , 'Kadastr raqami');

modSection.append(JShMod , YShMod , AutoMod , UyJoyMod) 


function toggleModal() {
    const customModal = document.getElementById('custom-modal')

    customModal.classList.toggle('modal-active')
}

function toggleOverlay() {
    const overlay = document.getElementById('custom-overlay')

    overlay.classList.toggle('overlay-active')
    toggleModal()
}
