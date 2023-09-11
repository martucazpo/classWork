import Provider from "./Provider.js"


class Component extends Provider {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.render = this.render.bind(this)
        this.root = document.getElementById("root")
    }
    render(...elem) {
        this.shadowRoot.innerHTML = ""
        elem.forEach(el => this.shadowRoot.append(el))
        this.root.append(this.shadowRoot)   
    }
}


customElements.define("root-component", Component, {extends: "div"})


export default Component