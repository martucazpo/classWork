const { User, Todo } = require("../db/models/index")

module.exports = {
    addTodo: (req, res) => {
        let { task, userId } = req.body.data
        let newTask = new Todo({ task, userId })
        newTask.save().then(data => {
            let { userId, _id } = data
            User
                .findByIdAndUpdate({ _id: userId }, { $push: { todos: _id } }, { new: true })
                .sort({ createdAt: 1 })
                .populate("todos")
                .exec()
                .then(data => {
                    return res.json(data)
                })
                .catch(err => console.log(err))
        })
            .catch(err => console.log(err))
    },
    getAllTodos: (req, res)=>{
        let {_id} = req.body.data
        User.findById({_id})
        .sort({ createdAt: 1 })
        .populate("todos")
        .exec()
        .then(data => res.json(data))
    }
}