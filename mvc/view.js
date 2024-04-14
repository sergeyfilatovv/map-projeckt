import renderHtml from '../js/renderHtml.js'

const elements = {
    btnsContainer: document.querySelector('.app__wrapper'),
    cardsContainer: document.querySelector('.card__wrapper'),
    overlay: document.getElementById('overlay')
}
function openModal(data, fullData){
    if(data.length){
    renderHtml.renderHtml(data)
    openCard()

    const btnClose = document.querySelector('.button--close')
    
    btnClose.addEventListener('click', ()=>{
        closeCard()
    })

    }
}
function openCard(){
    elements.overlay.classList.add('overlay--active')
}

function closeCard(){
    elements.cardsContainer.innerHTML = ''
    elements.overlay.classList.remove('overlay--active')
}


export {elements, openModal, closeCard}