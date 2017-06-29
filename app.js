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
        .addEventListener('click', this.removeFlick')
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
     f.style.backgroundColor= "cornflowerblue"
    //  if (f.style.backgroundColor=="cornflowerblue"){
    //      f.style.backgroundColor=="blue"
    //      this.flick.favStatus= true
    //  }
    //  else{
    //      this.flick.favStatus= false
    //  } 
  },
  removeFlick(ev){
     ev.target.closest('.flick').remove(f)
  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
  templateSelector: '.flick.template',
})