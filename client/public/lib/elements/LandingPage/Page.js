import component from "../../module/index.js"
import state from "../../module/state.js"
let { setState, postData, render } = component

class Page {
    constructor(elem) {
        this.state = state
        this.setState = setState
        this.render = render
        this.postData = postData
        this.elem = elem
        this.handleClick = this.handleClick.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.logoutForm = this.logoutForm.bind(this)
        const nav = document.createElement("div", { is: "nav-component" })
        const loginBtn = document.createElement("button")
        loginBtn.innerText = "LOGIN"
        loginBtn.addEventListener("click", this.handleClick)
        const modal = document.createElement("dialog", { is: "modal-component" })
        const projectLogin = document.createElement("div", { is: "project-login" })
        modal.append(projectLogin)
        const logoutButton = document.createElement("button")
        logoutButton.innerText = "Logout"
        logoutButton.addEventListener("click", this.handleLogout)
        if (!this.state.isAuth && !this.state.modalOpen) {
            nav.append(loginBtn)
        } else if (!this.state.isAuth && this.state.modalOpen) {
            nav.append(modal)
        } else {
            nav.append(logoutButton)
        }
        this.elem.append(nav)
        const main = document.createElement("main")
        main.style.padding = 0
        main.style.margin = 0
        main.style.width = "100vw"
        main.style.minHeight = "80vh"
        main.style.backgroundColor = this.state.isAuth ? "lime" : "orchid"
        const authh1 = document.createElement("h1")
        authh1.style.margin = 0
        authh1.style.padding = 0
        authh1.innerText = !this.state.isAuth ? "NOT Authorized - YET." : "Authorized!"
        nav.append(main)
        main.append(authh1)
        if (this.state.isAuth) {
            const todoApp = document.createElement("div", { is: "todo-element" })
            main.append(todoApp)
        }
        this.elem.append(main)
        return this.elem
    }
    handleClick() {
        this.setState({
            ...this.state,
            isLogin: true,
            modalOpen: true
        })
        this.render()
        return this
    }
    handleLogout() {
        this.setState({
            ...this.state,
            isAuth: false,
            isLogin: true,
            modalOpen: false
        })
        this.postData("http://localhost:8000/auth/logout").then(data => console.log(data))
        this.render()
        return this
    }
    logoutForm() {
        const form = document.createElement("form", { is: "form-comp" })
        form.setAttribute("btn-text", "LOGOUT")
        form.addEventListener("submit", this.handleLogout)
    }
}

export default Page