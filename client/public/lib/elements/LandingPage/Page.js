import module from "../../module/index.js"
import store from "../../state/store.js"
let { handleLogout, handleModalOpen, keepLoggedOn } = module

class Page {
    constructor(elem) {
        this.elem = elem
        this.handleLogout = handleLogout
        this.handleModalOpen = handleModalOpen
        const nav = document.createElement("div", { is: "nav-component" })
        const loginBtn = document.createElement("button")
        loginBtn.innerText = "LOGIN"
        loginBtn.addEventListener("click", this.handleModalOpen)
        const modal = document.createElement("dialog", { is: "modal-component" })
        const projectLogin = document.createElement("div", { is: "project-login" })
        modal.append(projectLogin)
        const logoutForm = document.createElement("form", { is: "form-comp" })
        logoutForm.setAttribute("btn-text", "LOGOUT")
        logoutForm.addEventListener("submit", this.handleLogout)
        if (!store.getState().isAuth && !store.getState().modalOpen) {
            nav.append(loginBtn)
        } else if (!store.getState().isAuth && store.getState().modalOpen) {
            nav.append(modal)
        } else {
            nav.append(logoutForm)
        }
        this.elem.append(nav)
        const main = document.createElement("main")
        main.style.padding = 0
        main.style.margin = 0
        main.style.width = "100vw"
        main.style.minHeight = "80vh"
        main.style.backgroundColor = store.getState().isAuth ? "lime" : "orchid"
        const authh1 = document.createElement("h1")
        authh1.style.margin = 0
        authh1.style.padding = 0
        authh1.innerText = !store.getState().isAuth ? "NOT Authorized - YET." : "Authorized!"
        nav.append(main)
        main.append(authh1)
        if (store.getState().isAuth) {
            const todoApp = document.createElement("div", { is: "todo-element" })
            main.append(todoApp)
        }
        this.elem.append(main)
        return this.elem
    }
}

export default Page