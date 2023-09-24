import store from "../state/store.js"
import module from "../module/index.js"
const { handleDelete, handleEdit, getAllTasks, getReadyToEdit } = module

class List extends HTMLUListElement {
    constructor() {
        super()
        this.getAllTasks = getAllTasks
        this.handleDelete = handleDelete
        this.handleEdit = handleEdit
        this.getReadyToEdit = getReadyToEdit
        this.makeList = this.makeList.bind(this)
        this.style.listStyle = "none"
    }
    connectedCallback() {
        this.makeList()
    }
    async makeList() {
        await this.getAllTasks()
        store.getState().user.todos.forEach(todo => {
            let li = document.createElement("li")
            if (store.getState().isTodoEdit && todo._id === store.getState().editTodoId) {
                let form = document.createElement("form", { is: "form-comp" })
                form.setAttribute("btn-text", "CHANGE!")
                form.addEventListener("submit", this.handleEdit)
                let taskInput = document.createElement("div", { is: "input-comp" })
                taskInput.setAttribute("name", "editTask")
                taskInput.setAttribute("type", "text")
                taskInput.setAttribute("required", "true")
                taskInput.setAttribute("label-txt", "Task to Change: ")
                form.append(taskInput)
                li.append(form)
            } else {
                li.innerText = todo.task
                let btnDiv = document.createElement("div")
                let deleteBtn = document.createElement("button")
                deleteBtn.innerText = "DONE!"
                deleteBtn.addEventListener('click', () => this.handleDelete(todo))
                btnDiv.append(deleteBtn)
                let editBtn = document.createElement("button")
                editBtn.innerText = "EDIT!"
                editBtn.addEventListener("click", () => this.getReadyToEdit(todo))
                btnDiv.append(editBtn)
                li.append(btnDiv)
            }
            this.append(li)
            return this
        })
        return
    }
}


customElements.define("todo-list", List, { extends: "ul" })


export default List