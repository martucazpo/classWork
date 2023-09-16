import Page from "./Page.js"
//import state from "../../global/state.js"
// import Component from "../../module/index.js"
// let { state } = Component

class LandingPage extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.margin = 0
        this.shadowRoot.padding = 0
        new Page(this.shadowRoot)
    }
}

customElements.define("landing-page", LandingPage)

export default LandingPage