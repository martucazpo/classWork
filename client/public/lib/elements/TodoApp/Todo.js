import component from "../../module/index.js"
import state from "../../module/state.js"
const { setState, handleInput, clearInputs, postData, render } = component

class Todo {
    constructor(elem) {
        this.state = state
        this.elem = elem
        this.setState = setState
        this.handleInput = handleInput
        this.clearInputs = clearInputs
        this.postData = postData
        this.render = render
        this.addTodoForm = this.addTodoForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    addTodoForm() {
        let todoForm = document.createElement("form", { is: "form-comp" })
        todoForm.setAttribute("btn-text", "ADD A TASK!")
        todoForm.addEventListener("submit", this.handleSubmit)
        let taskInput = document.createElement("div", { is: "input-comp" })
        taskInput.setAttribute("name", "task")
        taskInput.setAttribute("type", "text")
        taskInput.setAttribute("required", true)
        taskInput.setAttribute("label-txt", "Task to add: ")
        taskInput.addEventListener("input", this.handleInput)
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
    async handleSubmit(e) {
        e.preventDefault()
        this.clearInputs()
        await this.postData("http://127.0.0.1:8000/todo/add", { data: { task: state.task, userId: state.user._id } })
            .then((data) => {
                this.setState({
                    ...this.state,
                    user: data
                })
            })
            .catch(err => err)
        this.render()
        return this
    }
}

export default Todo