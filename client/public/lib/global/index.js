

class Global{
    constructor(elem){
        this.elem = elem
        this.state = {
            happy: true
        }
        this.setState = this.setState.bind(this)
        this.render = this.render.bind(this)
    }
    setState(newState){
        Object.assign(this.state, newState)
    }
    render(){
        const root = document.getElementById("root")
        root.innerHTML = ""
        root.append(this.elem)
    }
}

const testDoc = document.createElement("div", {is: "test-component"})

const component = new Global(testDoc)

export default component

