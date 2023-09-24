const authControllers = require("./authControllers")
const todoControllers = require("./todoControllers")

module.exports = {
    login: authControllers.login,
    register: authControllers.register,
    logout: authControllers.logout,
    checkauth: authControllers.checkAuth,
    addtodo: todoControllers.addTodo,
    getalltodos: todoControllers.getAllTodos,
    deletetodo: todoControllers.deleteTodo,
    edittodo: todoControllers.editTodo,
    checkall: todoControllers.getGetAll
}