import Component from "../global/index.js"


class Test extends Component{
    constructor(){
        super()
        this.h1 = document.createElement("h1")
        this.h1.innerText = this.state.happy ? "Hello Word" : "Go away!"
        this.render(this.h1)
    }
}

customElements.define("test-component", Test, {extends: "div"})

export default Test