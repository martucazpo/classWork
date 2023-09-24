import module from "../module/index.js"
let { handleModalClose } = module

class Modal extends HTMLDialogElement {
    constructor() {
        super()
        this.handleModalClose = handleModalClose
        this.style.position = "absolute"
        this.style.zIndex = 5
        this.style.top = "50%"
        this.style.left = "50%"
        this.style.transform = "translate(-50%,-50%)"
        this.style.width = "fit-content"
        this.style.height = "fit-content"
        this.closeBtn = document.createElement("button")
        this.closeBtn.innerText = "X"
        this.closeBtn.addEventListener("click", this.handleModalClose)
        this.append(this.closeBtn)
        Array.from(this.children).forEach(child => this.append(child))
        this.show()
        return this
    }
}

customElements.define("modal-component", Modal, { extends: "dialog" })

export default Modal