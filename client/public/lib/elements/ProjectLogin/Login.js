import component from "../../module/index.js"
import state from "../../module/state.js"
let { setState, postData, render, handleInput, clearInputs } = component

class Login{
    constructor(elem) {
        this.elem = elem
        this.state = state
        this.setState = setState
        this.postData = postData
        this.render = render
        this.handleInput = handleInput
        this.clearInputs = clearInputs
        this.showForm = this.showForm.bind(this)
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.clearInputs = this.clearInputs.bind(this)
        this.toggleLogin = this.toggleLogin.bind(this)
        this.processData = this.processData.bind(this)
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
        inputs.forEach(input => input.addEventListener("input", (e) => this.handleInput(e)))
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
        inputs.forEach(input => input.addEventListener("input", (e) => this.handleInput(e)))
        inputs.forEach(input => form.append(input))
        return form
    }
    handleRegister(e) {
        e.preventDefault()
        this.postData("http://localhost:8000/auth/register", { data: this.state }).then((data) => this.processData(data));
        this.setState({
            ...this.state,
            firstName: "",
            lastName: "",
            email: "",
            password1: "",
            password2: "",
            password: "",
            isLogin: true,
            modalOpen: false
        })
        this.clearInputs()
        //this.render()
        return this
    }
    // handleInput(e) {
    //     let { name, value } = e.target
    //     this.setState({
    //         ...this.state,
    //         [name]: value
    //     })
    //     return this
    // }
    handleLogin(e) {
        e.preventDefault()
        this.postData("http://localhost:8000/auth/login", { data: this.state }).then((data) => this.processData(data));
        this.setState({
            ...this.state,
            email: "",
            password: "",
            modalOpen: false,
            isLogin: true
        })
        this.clearInputs()
        //this.render()
        return this
    }
    // clearInputs() {
    //     let inputs = Array.from(document.querySelectorAll("input-comp"))
    //     inputs.forEach(input => {
    //         let name = input.lastChild.name
    //         input.lastChild.value = this.state[name]
    //     })
    //     //this.showForm()
    //     this.render()
    //     return this
    // }
    toggleLogin() {
        this.setState({
            ...this.state,
            modalOpen: true,
            isLogin: !this.state.isLogin
        })
        this.showForm()
        return this
    }
    processData(data) {
        if (data.status) {
            this.setState({
                ...this.state,
                isAuth: true,
                user: Object.assign(this.state.user, data.info)
            })
            this.render()
        }
        return this
    }
    showForm(){  
        if (this.state.isLogin) {
            this.elem.innerHTML = ""
            this.elem.append(this.login())
        } else {
            this.elem.innerHTML = ""
            this.elem.append(this.register())
        }
        const toggleLoginBtn = document.createElement("button")
        toggleLoginBtn.addEventListener("click", this.toggleLogin)
        toggleLoginBtn.innerText = this.state.isLogin ? "REGISTER" : "LOGIN"
        this.elem.append(toggleLoginBtn)
        return this.elem
    }
}

export default Login