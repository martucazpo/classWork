
import component from "../module/index.js"
import state from "../module/state.js"
let { setState, render } = component

class Modal extends HTMLDialogElement {
    constructor() {
        super()
        this.render = render
        this.state = state
        this.setState = setState
        this.handleClick = this.handleClick.bind(this)
        this.style.position = "absolute"
        this.style.zIndex = 5
        this.style.top = "50%"
        this.style.left = "50%"
        this.style.transform = "translate(-50%,-50%)"
        this.style.width = "fit-content"
        this.style.height = "fit-content"
        this.closeBtn = document.createElement("button")
        this.closeBtn.innerText = "X"
        this.closeBtn.addEventListener("click", this.handleClick)
        this.append(this.closeBtn)
        Array.from(this.children).forEach(child => this.append(child))
        this.show()
        return this
    }
    handleClick() {
        this.setState({
            ...this.state,
            modalOpen: false
        })
        this.close()
        render()
    }
}

customElements.define("modal-component", Modal, { extends: "dialog" })

export default Modal