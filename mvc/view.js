const elements = {
    btnsContainer: document.querySelector('.app__wrapper'),
    cardsContainer: document.querySelector('.card__wrapper'),
    overlay: document.getElementById('overlay')
    
}

function renderData(data){
    if(data.length){
        elements.cardsContainer.innerHTML = ''
        const html = `<div class="card none">
                            <div class="card__description">
                                <h1 class="card__title">${data[0].title}</h1>
                                <p class="card__subtitle">${data[0].subtitle}</p>
                            </div>
                            <div class="card__img">
                                <img src="${data[0].img}" alt="${data[0].desc}">
                            </div>
                        </div>
    ` 
    
    elements.cardsContainer.insertAdjacentHTML('beforeend', html)
    openCard()
    
    }
       
    
   
            

}

function openCard(){
    document.querySelector('.card').classList.remove('none')
    elements.overlay.classList.add('overlay--active')
}

function closeCard(){
    elements.cardsContainer.innerHTML = ''
    elements.overlay.classList.remove('overlay--active')
}


export {elements, renderData, closeCard}