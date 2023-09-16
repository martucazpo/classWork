import state from "../module/state.js"

class Navbar extends HTMLDivElement{
    constructor(){
        super()
        this.state = state
        this.style.width = "100vw"
        this.style.height = "20vh"
        this.style.margin = 0
        this.style.padding = 0
        this.style.backgroundColor = !this.state.isAuth ? "purple":"seagreen"
    }
    connectedCallback(){
        Array.from(this.children).forEach(child => this.append(child))
    }  
}

customElements.define("nav-component", Navbar, {extends: "div"})

export default Navbar