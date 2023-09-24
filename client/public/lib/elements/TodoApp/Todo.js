import module from "../../module/index.js"
const { addTasks } = module

class Todo {
    constructor(elem) {
        this.elem = elem
        this.addTasks = addTasks
        this.addTodoForm = this.addTodoForm.bind(this)
    }
    addTodoForm() {
        let todoForm = document.createElement("form", { is: "form-comp" })
        todoForm.setAttribute("btn-text", "ADD A TASK!")
        todoForm.addEventListener("submit", this.addTasks)
        let taskInput = document.createElement("div", { is: "input-comp" })
        taskInput.setAttribute("name", "task")
        taskInput.setAttribute("type", "text")
        taskInput.setAttribute("required", true)
        taskInput.setAttribute("label-txt", "Task to add: ")
        todoForm.append(taskInput)
        return todoForm
    }
    localRender() {
        this.elem.innerHTML = ""
        const wrapper = document.createElement("div")
        let form = this.addTodoForm()
        let list = document.createElement("ul", { is: "todo-list" })
        wrapper.append(form)
        wrapper.append(list)
        this.elem.append(wrapper)
        return this
    }
}

export default Todo