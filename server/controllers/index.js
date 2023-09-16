const authControllers = require("./authControllers")
const todoControllers = require("./todoControllers")

module.exports = {
    login: authControllers.login,
    register: authControllers.register,
    logout: authControllers.logout,
    addtodo: todoControllers.addTodo,
    getalltodos: todoControllers.getAllTodos
}