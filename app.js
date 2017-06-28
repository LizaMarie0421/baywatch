const app = {
  init(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)
    this.button= 
    document
      .querySelector(selectors.formSelector)
      .addEventListener(
        'submit', 
        this.handleSubmit.bind(this)
      )
  },
  renderListItem(flick) {
    const item = document.createElement('li')
    item.textContent = flick.name
    
        favButton = document.createElement("button")
        favButton.textContent= "Favorite Button"
        favButton.setAttribute("class","success favButton")
        favButton.addEventListener('click',this.changeFavButton.bind(this))
        item.appendChild(favButton)

        delButton = document.createElement("button")
        delButton.textContent= "Delete Button"
        delButton.setAttribute("class","success delButton")
        delButton.addEventListener('click',this.DeleteButton.bind(this))
        item.appendChild(delButton)
        return item
  },
  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
    }
    const listItem = this.renderListItem(flick)
    this.list.appendChild(listItem)

    this.max ++
  },
  changeFavButton(ev){
     f= ev.target.parentElement
     f.style.color= "cornflowerblue"
  },
  DeleteButton(ev){
     f= ev.target.parentElement
     f.remove(f)
  }
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})