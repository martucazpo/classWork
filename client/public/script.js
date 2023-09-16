import library from "./lib/index.js"

const { component } = library

let page = document.createElement("landing-page")

component.render(page)

export default library