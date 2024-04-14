import * as view from '../mvc/view.js'
const renderHtml = (data)=>{
    view.elements.cardsContainer.innerHTML = ''
    const html = `<div class="card">
                        <div class="card__block">
                            <div class="card__description">
                                <h1 class="card__title">${data[0].title}</h1>
                                <p class="card__subtitle">${data[0].subtitle}</p>
                            </div>
                            <div class="card__img">
                                <img src="${data[0].img}" alt="${data[0].desc}">
                            </div>
                        </div>
                        <div class="card__btns-wrapper">
                            <button class="button button--close">Закрыть</button>
                        </div>
                    </div>
` 

view.elements.cardsContainer.insertAdjacentHTML('beforeend', html)
}

export default {renderHtml}