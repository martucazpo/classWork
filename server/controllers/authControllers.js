const { User } = require("../db/models")
const bcrypt = require("bcryptjs")

module.exports = {
    checkAuth: async (req, res, next)=>{
        if(req.app.locals.auth.status){
            req._id = req.app.locals.auth.user._id
            next()
        }else{
            res.send(false)
        }
    },
    register: async (req, res) => {
        let { password1, password2, firstName, lastName, email } = req.body.data
        if (password1 !== password2) {
            return res.json({ status: false, info: "The passwords do not match." })
        } else {
            let password = password1
            let info
            await User.findOne({ email }).then(async user => {
                if (user) {
                    info = "This email is already registered in the database."
                    Object.assign(req.app.locals.auth, { status: false, info, user: false })
                    return res.json({ status: false, info })
                } else {
                    password = bcrypt.hashSync(password, 10)
                    let newUser = new User({ firstName, lastName, email, password })
                    let user = await newUser.save().then(user => user)
                    let info = "There was a problem"
                    if (!user) {
                        Object.assign(req.app.locals.auth, { status: false, info, user: false })
                        return res.json({ status: false, info })
                    } else {
                        Object.assign(req.app.locals.auth, { status: true, info: null, user })
                        return res.json({ status: true, user })
                    }
                }
            }).catch(err => console.log(err))
        }
    },
    login: async (req, res) => {
        let { email, password } = req.body.data
        let info
        await User.findOne({ email }).then(user => {
            if (!user) {
                info = "This user is not registered to the database."
                Object.assign(req.app.locals.auth, { status: false, info, user: false })
                return res.json({ status: false, info })
            }
            if (!bcrypt.compareSync(password, user.password)) {
                info = "There was a problem with the login."
                Object.assign(req.app.locals.auth, { status: false, info, user: false })
                return res.json({ status: false, info })
            }
            info = user
            Object.assign(req.app.locals.auth, { status: true, info: null, user: info })
            return res.json({ status: true, info })
        }).catch(err => console.log(err))
    },
    logout: (req, res) => {
        let info = "User is logged out."
        Object.assign(req.app.locals.auth, { status: false, info, user: false })
        return res.json({ status: false, info })
    }
}