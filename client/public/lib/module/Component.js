import state from "./state.js"

class Component {
    constructor() {
        this.state = state
        this.render = this.render.bind(this)
        this.setState = this.setState.bind(this)
        this.postData = this.postData.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.clearInputs = this.clearInputs.bind(this)
    }
    render() {
        const root = document.getElementById("root")
        root.innerHTML = ""
        let page = document.createElement("landing-page")
        root.append(page)
        return this
    }
    setState(...args) {
        if (typeof args[0] === "object") {
            return Object.assign(this.state,((prevState, arg)=>{
                let newState = arg;
                let state = Object.assign({}, prevState, newState);
                return state;
            })(this.state, args[0]));
        } else if (typeof args[0] === "function") {
            let callback = args[0];
            let prevState = this.state;
            return (this.state = setState(callback(prevState)));
        } else {
            console.error("Argument must be a type of object or a type of function");
            return this;
        }
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
    handleInput(e) {
        let { name, value } = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
        return this
    }
    clearInputs() {
        let inputs = Array.from(document.querySelectorAll("input-comp"))
        inputs.forEach(input => {
            let name = input.lastChild.name
            input.lastChild.value = this.state[name]
        })
        //this.showForm()
        this.render()
        return this
    }
}

export default Component