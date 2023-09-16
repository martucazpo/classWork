import Login from "./Login.js";

class ProjectLogin extends HTMLDivElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"})
        new Login(this.shadowRoot).showForm()
        return this
    }
}

customElements.define("project-login", ProjectLogin, {extends: "div"})

export default ProjectLogin