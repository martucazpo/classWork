import store from "../state/store.js"
import { handleInput } from "../state/actions.js"

class Input extends HTMLDivElement{
    constructor(){
        super()
        this.handleInput = handleInput
        this.label = document.createElement("label")
        this.input = document.createElement("input")
        this.append(this.label)
        this.append(this.input)
    }
    connectedCallback(){
        let name = this.getAttribute("name")
        let type = this.getAttribute("type")
        let required = this.getAttribute("required")
        let labelTxt = this.getAttribute("label-txt")
        this.label.innerText = labelTxt
        this.label.setAttribute("for", name)
        this.input.setAttribute("name", name)
        this.input.setAttribute("type", type)
        this.input.setAttribute("id", name)
        this.input.required = required
        this.input.value = store.getState()[name]
        this.input.addEventListener("input", (e)=>store.dispatch(handleInput(e)))
    }
}

customElements.define("input-comp", Input, {extends: "div"})

export default Input