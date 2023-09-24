import initialState from "./intialState.js"
import { HANDLE_INPUT, OPEN_MODAL, CLOSE_MODAL, SET_USER, GET_READY_FOR_EDIT, EDIT_TODO, ADD_TODO, REGISTER_USER, LOGIN_USER, TOGGLE_LOGIN, LOGOUT_USER, GET_USER } from "./types.js"


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_INPUT:
            let { name, value } = action.payload.target
            return {
                ...state,
                [name]: value
            }
        case OPEN_MODAL:
            return {
                ...state,
                modalOpen: true,
                isLogin: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modalOpen: false,
                isLogin: true
            }
        case SET_USER:
            return {
                ...state,
                user: Object.assign(state.user, action.payload),
            }
        case GET_READY_FOR_EDIT:
            return {
                ...state,
                isTodoEdit: true,
                editTask: action.payload.task,
                editTodoId: action.payload._id
            }
        case EDIT_TODO:
            return {
                ...state,
                user: Object.assign(state.user, action.payload),
                editTodoId: "",
                editTask: "",
                isTodoEdit: false
            }
        case ADD_TODO:
            return {
                ...state,
                user: Object.assign(state.user, action.payload),
                task: ""
            }
        case REGISTER_USER:
            return {
                ...state,
                user: Object.assign(state.user, action.payload.info),
                isAuth: true,
                firstName: "",
                lastName: "",
                email: "",
                password1: "",
                password2: "",
                password: "",
                isLogin: true,
                modalOpen: false
            }
        case LOGIN_USER:
            // console.log(action.payload)
            return {
                ...state,
                user: Object.assign(state.user, action.payload.info),
                isAuth: true,
                email: "",
                password: "",
                modalOpen: false,
                isLogin: true
            }
        case TOGGLE_LOGIN:
            return {
                ...state,
                modalOpen: true,
                isLogin: !state.isLogin
            }
        case LOGOUT_USER:
            return {
                ...state,
                isAuth: false,
                isLogin: true,
                modalOpen: false
            }
        case GET_USER:
            console.log(action.payload)
            return {
                ...state,
                user: action.payload,
                isAuth: true,
                modalOpen: false,
                firstName: "",
                lastName: "",
                email: "",
                password1: "",
                password2: "",
                password: "",
                isLogin: true,
                task: "",
                editTask: "",
                editTodoId: "",
                isTodoEdit: false,
            }
        default:
            return state
    }
}


export default rootReducer