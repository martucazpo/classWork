import store from "../state/store.js"
import { loginUser, registerUser, logoutUser, addTodo, editTodo, setUser, openModal, closeModal, getReadyToEdit, getUser } from "../state/actions.js"

class Module {
    constructor() {
        this.render = this.render.bind(this)
        this.postData = this.postData.bind(this)
        this.clearInputs = this.clearInputs.bind(this)
        this.getAllTasks = this.getAllTasks.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.addTasks = this.addTasks.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.getReadyToEdit = this.getReadyToEdit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleModalOpen = this.handleModalOpen.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
        this.keepLoggedOn = this.keepLoggedOn.bind(this)
    }
    render() {
        const root = document.getElementById("root")
        root.innerHTML = ""
        let page = document.createElement("landing-page")
        root.append(page)
        return this
    }
    async postData(url = "", data = {}) {
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        });
        return response.json();
    }
    async getAllTasks() {
        await this.postData("http://127.0.0.1:8000/todo/getall", { data: { _id: store.getState().user._id } }).then(data => store.dispatch(setUser(data)))
    }
    async handleLogin(e) {
        e.preventDefault()
        await this.postData("http://127.0.0.1:8000/auth/login", { data: store.getState() }).then((data) => {
            data.status && store.dispatch(loginUser(data))
            this.render()
        });
        this.clearInputs()
        return this
    }
    async handleRegister(e) {
        e.preventDefault()
        await this.postData("http://127.0.0.1:8000/auth/register", { data: store.getState() }).then((data) => {
            data.status && store.dispatch((registerUser(data)))
            this.render()
        });
        this.clearInputs()
        return this
    }
    async handleLogout() {
        this.postData("http://127.0.0.1:8000/auth/logout").then(data => {
            store.dispatch(logoutUser())
            this.render()
        })
        return this
    }
    async addTasks(e) {
        e.preventDefault()
        await this.postData("http://127.0.0.1:8000/todo/add", { data: { task: store.getState().task, userId: store.getState().user._id } })
            .then((data) => {
                store.dispatch(addTodo(data))
            })
            .catch(err => err)
        this.clearInputs()
        this.render()
        return this
    }
    async handleDelete(data) {
        await this.postData("http://127.0.0.1:8000/todo/delete", { data })
            .then(data => {
                store.dispatch(setUser(data))
                this.render()
            })
        return this
    }
    getReadyToEdit(obj) {
        store.dispatch(getReadyToEdit(obj))
        this.render()
        return this
    }
    async handleEdit(e) {
        e.preventDefault()
        await this.postData("http://127.0.0.1:8000/todo/edit", { data: { _id: store.getState().editTodoId, task: store.getState().editTask } })
            .then(data => {
                store.dispatch(editTodo(data))
                this.render()
            })
        return this
    }
    clearInputs() {
        let inputs = Array.from(document.querySelectorAll("input-comp"))
        inputs.forEach(input => {
            let name = input.lastChild.name
            input.lastChild.value = store.getState()[name]
        })
        this.render()
        return this
    }
    handleModalOpen() {
        store.dispatch(openModal())
        this.render()
        return this
    }
    handleModalClose() {
        store.dispatch(closeModal())
        this.close()
        this.render()
        return this
    }
    async keepLoggedOn() {
        await fetch("http://127.0.0.1:8000/auth")
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log("This actually happened!")
                   store.dispatch(getUser(data))
                    return
                }
            })
            .then(res => this.render())
    }
}

export default Module