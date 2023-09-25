import store from "../state/store.js"
import module from "../module/index.js"
const { handleDelete, handleEdit, getAllTasks, getReadyToEdit, createCustomElement } = module

class List extends HTMLUListElement {
    constructor() {
        super()
        this.getAllTasks = getAllTasks
        this.handleDelete = handleDelete
        this.handleEdit = handleEdit
        this.getReadyToEdit = getReadyToEdit
        this.createCustomElement = createCustomElement
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
                let form = this.createCustomElement("form", { is: "form-comp" }, { "btn-text": "CHANGE!" }, { "submit": this.handleEdit })
                let taskInput = this.createCustomElement("div", { is: "input-comp" }, { "name": "editTask" }, { "type": "text" }, { "required": true }, { "label-txt": "Task to change: " })
                form.append(taskInput)
                li.append(form)
            } else {
                li.innerText = todo.task
                let btnDiv = document.createElement("div")
                let deleteBtn = this.createCustomElement("button", null, { "click": this.handleDelete, "option": todo })
                deleteBtn.innerText = "DONE!"
                btnDiv.append(deleteBtn)
                let editBtn = this.createCustomElement("button", null, { "click": this.getReadyToEdit, "option": todo })
                editBtn.innerText = "EDIT!"
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