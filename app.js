const app ={
    init(Selectors){
        this.flick = []//empty array and everyt time submit add flick tot array
        this.max = 0
        this.list = document.querySelector(Selectors.listSelector)

        document
            .querySelector(Selectors.formSelector)
            .addEventListener(
                'submit', 
                this.handleSubmit.bind(this))
    },
    renderListItem(flick){
        const item = document.createElement('li')
        item.textContent = flick.namr
        return item
    },

    handleSubmit(ev){
        ev.preventDefault()
        const flickName = ev.target.flickName.value
        
        const f= ev.target
        const flick ={
            id: this.max + 1,
            name: f.flickName.value,
        }
        const listItem = this.renderListItem(flick)
        this.list.appendChild(listItem)
        this.max ++
    },
}


app.init({
    formSelector:'form#flick-form',
    listSelector:'#flick-list',
})