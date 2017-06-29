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
    item.dataset.id= flick.id   
     //allows for each new flick to have own attribute
        favButton = document.createElement("button")
        favButton.textContent= "I Like!!"
        favButton.setAttribute("class","success favButton")
        favButton.addEventListener('click',this.changeFavButton.bind(this))
        item.appendChild(favButton)

        delButton = document.createElement("button")
        delButton.textContent= "Delete Please"
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
      favStatus: false,
    }
    const listItem = this.renderListItem(flick)
    this.list.insertBefore(listItem, this.list.firstElementChild)
   // this.list.appendChild(listItem)
    this.flicks.unshift(flick)
    //this.flicks.push(flick)
    this.max ++
 //   f.flickName.value ="" or
    f.reset() 
    // resets form when click so it is empty
  },
  changeFavButton(ev){
     f= ev.target.parentElement
     f.style.color= "cornflowerblue"
    //  if (f.style.color=="cornflowerblue"){
    //      f.style.color=="blue"
    //      this.flick.favStatus= true
    //  }
    //  else{
    //      this.flick.favStatus= false
    //  } 
  },
  DeleteButton(ev){
     f= ev.target.parentElement
     f.remove(f)
  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})