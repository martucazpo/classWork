const { User, Todo } = require("../db/models/index")

module.exports = {
    addTodo: (req, res) => {
        let { task, userId } = req.body.data
        let newTask = new Todo({ task, userId })
        newTask.save().then(data => {
            let { userId, _id } = data
            User
                .findByIdAndUpdate({ _id: userId }, { $push: { todos: _id } }, { new: true })
                .populate({ path: "todos", options: { sort: { createdAt: 1 } } })
                .exec()
                .then(data => {
                    return res.json(data)
                })
                .catch(err => console.log(err))
        })
            .catch(err => console.log(err))
    },
    getAllTodos: (req, res) => {
        let { _id } = req.body.data
        User
            .findById({ _id })
            .populate({ path: "todos", options: { sort: { createdAt: 1 } } })
            .exec()
            .then(data => res.json(data))
            .catch(err => console.log(err))
    },
    getGetAll: (req, res) =>{
        let { _id } = req._id
        User
            .findById({ _id })
            .populate({ path: "todos", options: { sort: { createdAt: 1 } } })
            .exec()
            .then(data => res.json(data))
            .catch(err => console.log(err))
    },
    deleteTodo: (req, res) => {
        let { _id } = req.body.data
        Todo
            .findByIdAndDelete({ _id })
            .then(data => {
                User
                    .findByIdAndUpdate({ _id: data.userId }, { $pull: { todos: data._id } }, { new: true })
                    .populate({ path: "todos", options: { sort: { createdAt: 1 } } })
                    .exec()
                    .then(data => res.json(data))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    },
    editTodo: (req, res) => {
        let { _id, task } = req.body.data
        Todo
            .findByIdAndUpdate({ _id }, { task }, { new: true })
            .then(data => {
                User.findById({ _id: data.userId })
                    .populate({ path: "todos", options: { sort: { createdAt: 1 } } })
                    .exec()
                    .then(data => res.json(data))
                    .catch(err => console.log(err))
            })
    }
}