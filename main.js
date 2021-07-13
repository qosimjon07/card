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

    cardAction.append(button)

    card.append(cardAvatar)
    card.append(cardTitle)
    card.append(cardAction)

    return card;
}

const card1 = createCard('Jismoniy', './avatar.svg'); 
const card2 = createCard('yuridik', './avatar.svg'); 
const card3 = createCard('maishiy', './avatar.svg'); 
const card4 = createCard('oldi sotti', './avatar.svg'); 

const container = document.getElementsByClassName('container')[0];
container.append(card1)
container.append(card2)
container.append(card3)
container.append(card4)

function jsModul() {

    const modcontainer = document.createElement('div');
    modcontainer.classList.add('modal-container');
    
    const modfade = document.createElement('div');
    modfade.classList.add('modal');
    modfade.id='js-mod'
    
    const modDialog = document.createElement('div')
    modDialog.classList.add('modal-dialog')

    const modContent = document.createElement('div')
    modContent.classList.add('modal-content')

    const containerMod = document.createElement('div')
    containerMod.classList.add('container-mod')

    const jsModTitle = document.createElement('p')
    jsModTitle.classList.add('js-mod-title')
    jsModTitle.innerText = 'Jismoniy shaxslar uchun'

    const numTextTitle = document.createElement('p')
    numTextTitle.classList.add('num-text-title')
    numTextTitle.innerText = 'Passport seriya raqami'

    const modInput = document.createElement('input')
    modInput.classList.add('mod-input')
    modInput.type = Text 

    const modTitle = document.createElement('p')
    modTitle.classList.add('mod-title')
    modTitle.innerText = 'JSHIR'

    const modInput2 = document.createElement('input')
    modInput2.classList.add('mod-input')
    modInput2.type = Number

    const modButton = document.createElement('button')
    modButton.classList.add('mod-button')
    modButton.innerText = 'Yuklash'

    containerMod.append(jsModTitle, numTextTitle, modInput)
    containerMod.append(modTitle, modInput2, modButton)
    modContent.append(containerMod)
    modDialog.append(modContent)
    modfade.append(modDialog)
    modcontainer.append(modfade)
}

const consoleMod = jsModul();
const modSection = document.getElementsByClassName('modal-section')[0];

modSection.append(consoleMod)
