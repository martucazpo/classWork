import Module from "../../module/Module.js"
import store from "../../state/store.js"
import * as actions from "../../state/actions.js"

class Login extends Module{
    constructor(elem) {
        super()
        this.elem = elem
        this.showForm = this.showForm.bind(this)
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
        this.toggleLogin = this.toggleLogin.bind(this)
    }
    register() {
        let form = this.createCustomElement("form", "form-comp", { "btn-text": "REGISTER" }, { "submit": this.handleRegister })
        let firstNameInput = this.createCustomElement("div", "input-comp", { "name": "firstName" }, { "type": "text" }, { "required": true }, { "label-txt": "First Name: " })
        let lastNameInput = this.createCustomElement("div", "input-comp", { "name": "lastName" }, { "type": "text" }, { "required": true }, { "label-txt": "Last Name: " })
        let emailInput = this.createCustomElement("div", "input-comp", { "name": "email" }, { "type": "text" }, { "required": true }, { "label-txt": "Email: " })
        let password1Input = this.createCustomElement("div", "input-comp", { "name": "password1" }, { "type": "text" }, { "required": true }, { "label-txt": "Password: " })
        let password2Input = this.createCustomElement("div", "input-comp", { "name": "password2" }, { "type": "text" }, { "required": true }, { "label-txt": "Please Re-enter Password: " })
        let inputs = [firstNameInput, lastNameInput, emailInput, password1Input, password2Input]
        inputs.forEach(input => form.append(input))
        return form
    }
    login() {
        let form = this.createCustomElement("form", "form-comp", { "btn-text": "LOGIN" }, { "submit": this.handleLogin })
        let emailInput = this.createCustomElement("div", "input-comp", { "name": "email" }, { "type": "text" }, { "required": true }, { "label-txt": "Email: " })
        let passwordInput = this.createCustomElement("div", "input-comp", { "name": "password" }, { "type": "text" }, { "required": true }, { "label-txt": "Password: " })
        let inputs = [emailInput, passwordInput]
        inputs.forEach(input => form.append(input))
        return form
    }
    toggleLogin() {
        store.dispatch(actions.default.toggleLogin())
        this.showForm()
        return this
    }

    showForm() {
        if (store.getState().isLogin) {
            this.elem.innerHTML = ""
            this.elem.append(this.login())
        } else {
            this.elem.innerHTML = ""
            this.elem.append(this.register())
        }
        const toggleLoginBtn = document.createElement("button")
        toggleLoginBtn.addEventListener("click", this.toggleLogin)
        toggleLoginBtn.innerText = store.getState().isLogin ? "REGISTER" : "LOGIN"
        this.elem.append(toggleLoginBtn)
        return this.elem
    }
}

export default Login