import Todo from "./Todo.js"


class TodoElement extends HTMLDivElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"})
        new Todo(this.shadowRoot).localRender()
    }
}


customElements.define("todo-element", TodoElement, {extends: "div"})


export default TodoElement