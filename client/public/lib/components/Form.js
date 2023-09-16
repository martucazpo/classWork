class Form extends HTMLFormElement {
    constructor() {
        super()
        this.button = document.createElement("button")
    }
    connectedCallback() {
        let btnTxt = this.getAttribute("btn-text")
        this.button.setAttribute("type", "submit")
        this.button.innerText = btnTxt
        if (this.children) {
            Array.from(this.children).forEach(child => child.type !== "submit" && this.append(child))
        }
        this.append(this.button)
    }
}

customElements.define("form-comp", Form, { extends: "form" })

export default Form