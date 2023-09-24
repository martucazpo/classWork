import module from "../../module/index.js"
import store from "../../state/store.js"
import { toggleLogin } from "../../state/actions.js"
let { handleLogin, handleRegister } = module

class Login {
    constructor(elem) {
        this.elem = elem
        this.handleRegister = handleRegister
        this.handleLogin = handleLogin
        this.showForm = this.showForm.bind(this)
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
        this.toggleLogin = this.toggleLogin.bind(this)
    }
    register() {
        let form = document.createElement("form", { is: "form-comp" })
        form.setAttribute("btn-text", "REGISTER")
        form.addEventListener("submit", this.handleRegister)
        let firstNameInput = document.createElement("div", { is: "input-comp" })
        firstNameInput.setAttribute("name", "firstName")
        firstNameInput.setAttribute("type", "text")
        firstNameInput.setAttribute("required", "true")
        firstNameInput.setAttribute("label-txt", "First Name: ")
        let lastNameInput = document.createElement("div", { is: "input-comp" })
        lastNameInput.setAttribute("name", "lastName")
        lastNameInput.setAttribute("type", "text")
        lastNameInput.setAttribute("required", "true")
        lastNameInput.setAttribute("label-txt", "Last Name: ")
        let emailInput = document.createElement("div", { is: "input-comp" })
        emailInput.setAttribute("name", "email")
        emailInput.setAttribute("type", "text")
        emailInput.setAttribute("required", "true")
        emailInput.setAttribute("label-txt", "Email: ")
        let password1Input = document.createElement("div", { is: "input-comp" })
        password1Input.setAttribute("name", "password1")
        password1Input.setAttribute("type", "text")
        password1Input.setAttribute("required", "true")
        password1Input.setAttribute("label-txt", "Password: ")
        let password2Input = document.createElement("div", { is: "input-comp" })
        password2Input.setAttribute("name", "password2")
        password2Input.setAttribute("type", "text")
        password2Input.setAttribute("required", "true")
        password2Input.setAttribute("label-txt", "Please Re-enter Password: ")
        let inputs = [firstNameInput, lastNameInput, emailInput, password1Input, password2Input]
        inputs.forEach(input => form.append(input))
        return form
    }
    login() {
        let form = document.createElement("form", { is: "form-comp" })
        form.setAttribute("btn-text", "LOGIN")
        form.addEventListener("submit", this.handleLogin)
        let emailInput = document.createElement("div", { is: "input-comp" })
        emailInput.setAttribute("name", "email")
        emailInput.setAttribute("type", "text")
        emailInput.setAttribute("required", "true")
        emailInput.setAttribute("label-txt", "Email: ")
        let passwordInput = document.createElement("div", { is: "input-comp" })
        passwordInput.setAttribute("name", "password")
        passwordInput.setAttribute("type", "text")
        passwordInput.setAttribute("required", "true")
        passwordInput.setAttribute("label-txt", "Password: ")
        let inputs = [emailInput, passwordInput]
        inputs.forEach(input => form.append(input))
        return form
    }
    toggleLogin() {
        store.dispatch(toggleLogin())
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