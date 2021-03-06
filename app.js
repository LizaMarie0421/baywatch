const app = {
  init(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)
    this.template = document.querySelector(selectors.templateSelector)

    document
      .querySelector(selectors.formSelector)
      .addEventListener(
        'submit', 
        this.handleSubmit.bind(this)
      )
  },
  searchList(flick) {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("flick-list");
    li = ul.getElementsByTagName('flick');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    },
  moveDownFlick(flick, ev) {
      const listItem = ev.target.closest('.flick')
      this.list.insertBefore(listItem, listItem.nextSibling.nextSibling)

    const currentflick = this.flicks[i]
    const prevflick = this.flicks[i+1]
    this.flicks[i] = prevflick
    this.flicks[i+1] = currentflick
  },
  moveUpFlick(flick, ev) {
    //added in dom
      const listItem = ev.target.closest('.flick')
      this.list.insertBefore(listItem, listItem.previousSibling)
    //add an array 
    const i = this.flicks.indexOf(flick)

    const currentflick = this.flicks[i]
    const prevflick = this.flicks[i-1]
    this.flicks[i] = prevflick
    this.flicks[i-1] = currentflick
  },
  favFlick(flick, ev) {
    const listItem = ev.target.closest('.flick')
    flick.fav = !flick.fav

    if (flick.fav) {
      listItem.classList.add('fav')
    } else {
      listItem.classList.remove('fav')
    }
  },

  removeFlick(flick, ev) {
    // remove from the DOM
    const listItem = ev.target.closest('.flick')
    listItem.remove()

    // remove from the array
    const i = this.flicks.indexOf(flick)
    this.flicks.splice(i, 1)
  },

  renderListItem(flick) {
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id = flick.id
    item
      .querySelector('.flick-name')
      .textContent = flick.name

    item
      .querySelector('button.remove')
      .addEventListener(
        'click', 
        this.removeFlick.bind(this, flick)
      )

    item
      .querySelector('button.fav')
      .addEventListener(
        'click', 
        this.favFlick.bind(this, flick)
      )
    item
      .querySelector('button.up')
      .addEventListener(
        'click', 
        this.moveUpFlick.bind(this, flick)
      )  
    item
      .querySelector('button.down')
      .addEventListener(
        'click', 
        this.moveDownFlick.bind(this, flick)
      )
    return item
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
      fav: false,
    }

    this.flicks.unshift(flick)

    const listItem = this.renderListItem(flick)
    this.list
      .insertBefore(listItem, this.list.firstElementChild)

    this.max ++
    f.reset()
  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
  templateSelector: '.flick.template',
})