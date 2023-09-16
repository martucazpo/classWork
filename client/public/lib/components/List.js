import state from "../module/state.js"
import component from "../module/index.js"
const { setState, postData } = component

class List extends HTMLUListElement {
    constructor() {
        super()
        this.state = state
        this.postData = postData
        this.setState = setState
        this.style.listStyle = "none"
    }
    connectedCallback() {
        this.innerHTML = ""
        this.postData("http://127.0.0.1:8000/todo/getall", { data: { _id: state.user._id } })
            .then(data => {
                this.setState({
                    ...this.state,
                    user: data
                })
                this.state.user.todos.forEach(todo => {
                    let li = document.createElement("li")
                    li.innerText = todo.task
                    this.append(li)
                    return this
                })
            })
        return this
    }
}


customElements.define("todo-list", List, { extends: "ul" })


export default List