import model from './model.js'
import * as view from './view.js'


view.elements.btnsContainer.addEventListener('click', (e)=>{
    const data = model.data
    const currentElement = e.target

    const result = data.filter((item) => item.id == currentElement.id )
   view.openModal(result, data)
    
})

view.elements.overlay.addEventListener('click',()=>{
    view. closeCard()
})
















