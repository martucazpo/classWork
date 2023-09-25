import Module from "../../module/Module.js"

class Todo extends Module{
    constructor(elem) {
        super()
        this.elem = elem
        this.elem.innerHTML = ""
        const wrapper = document.createElement("div")
        let todoForm = this.createCustomElement("form", "form-comp", { "btn-text": "ADD A TASK!" }, { "submit": this.addTasks })
        let taskInput = this.createCustomElement("div", "input-comp", { "name": "task" }, { "type": "text" }, { "required": true }, { "label-txt": "Task to Add" })
        todoForm.append(taskInput)
        let list = document.createElement("ul", { is: "todo-list" })
        wrapper.append(todoForm)
        wrapper.append(list)
        this.elem.append(wrapper)
    }
}

export default Todo