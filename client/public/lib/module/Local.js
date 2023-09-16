

class Local {
    constructor() {
        this.localState = {}
        this.localRender = this.localRender.bind(this)
        this.setLocalState = this.setLocalState.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }
    localRender(elem) {
        elem.innerHTML = ""
        let todoApp = document.createElement("todo-app")
        elem.append(todoApp)
    }
    setLocalState(...args) {
        if (typeof args[0] === "object") {
            return Object.assign(this.localState, ((prevState, arg) => {
                let newState = arg;
                let state = Object.assign({}, prevState, newState);
                return state;
            })(this.localState, args[0]));
        } else if (typeof args[0] === "function") {
            let callback = args[0];
            let prevState = this.localState;
            return (this.localState = setLocalState(callback(prevState)));
        } else {
            console.error("Argument must be a type of object or a type of function");
            return this;
        }
    }
   
}