import component from "../global/index.js"
let { state } = component

class Test extends HTMLDivElement{
    constructor(){
        super()
        this.h1 = document.createElement("h1")
        this.h1.innerText = state.happy ? "Hello Word" : "Go away!"
        this.append(this.h1)
    }
}

customElements.define("test-component", Test, {extends: "div"})

export default Test