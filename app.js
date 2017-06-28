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
        item.appendChild(favButton)
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
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})