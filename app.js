const app = {
  init(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)
    this.template = document.querySelector(selectors.templateSelector)
    this.button= 
    document
      .querySelector(selectors.formSelector)
      .addEventListener(
        'submit', 
        this.handleSubmit.bind(this)
      )
  },
  renderListItem(flick) {
    const item =this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id= flick.id   
     //allows for each new flick to have own attribute
    item
        .querySelector('.flick-name')
        .textContent = flick.name
     
        // favButton = document.createElement("button")
        // favButton.textContent= "I Like!!"
        // favButton.setAttribute("class","success favButton")
        // favButton.addEventListener('click',this.changeFavButton.bind(this))
        // item.appendChild(favButton)
    item
        .querySelector('button.remove')
        .addEventListener(
            'click',
            'this.removeFlick').bind(this,flick)
    item
        .querySelector('button.fav')
        .addEventListener(
            'click',
            'this.favFlick').bind(this,flick)            
        // delButton = document.createElement("button")
        // delButton.textContent= "Delete Please"
        // delButton.setAttribute("class","success delButton")
        // delButton.addEventListener('click',this.DeleteButton.bind(this))
        // item.appendChild(delButton)
        return item
  },
  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
      favStatus: false,
    }
    const listItem = this.renderListItem(flick)
    this.list.insertBefore(listItem, this.list.firstElementChild)
    this.flicks.unshift(flick)
    this.max ++
    f.reset() 
  },
  favFlck(flick, ev){
    const listItem= ev.target.closest('.flick')
    listItem.classList.add('fav')
    flick.fav=true

  },
  removeFlick(flick, ev){
     //remove from dom
     ev.target.closest('.flick').remove()
     //remove from array
    const i = this.flicks.indexOf(flick)
    this.flicks.splice(i,1)
  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
  templateSelector: '.flick.template',
})