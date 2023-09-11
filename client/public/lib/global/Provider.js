
class Provider extends HTMLDivElement{
    constructor(){
        super()
        this.state = {
            happy: true
        }
        this.setState = this.setState.bind(this)
    }
    setState(newState){
        Object.assign(this.state, newState)
    }
}

customElements.define("parent-component", Provider, {extends: "div"})

export default Provider