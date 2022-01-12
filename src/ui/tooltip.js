class Tooltip {
    constructor(element){
        this.element = element
        this.message = element.getAttribute('data-message')
    }

    // to initialize a component
    init(){
        // declare and assign var tip to newly created div
        const tip = document.createElement("div")
        // add a class to the newly created div 
        tip.classList.add("tip")
        // set the text content of the div to the instance of the class' message
        tip.textContent = this.message
        // append to the instance's element; shown visible to the DOM
        this.element.appendChild(tip)

        this.element.addEventListener('mouseenter', () => {
            tip.classList.add('active')
        })

        this.element.addEventListener('mouseleave', () => {
            tip.classList.remove('active')
        })

    }
}

export { Tooltip as default }