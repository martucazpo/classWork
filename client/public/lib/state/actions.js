import { HANDLE_INPUT, OPEN_MODAL, CLOSE_MODAL, SET_USER, GET_READY_FOR_EDIT, EDIT_TODO, ADD_TODO, LOGIN_USER, REGISTER_USER, TOGGLE_LOGIN, LOGOUT_USER, GET_USER } from "./types.js"

const handleInput = (input) =>{
    return {
        type: HANDLE_INPUT,
        payload: input
    }
}
const openModal = () =>{
    return {
        type: OPEN_MODAL
    }
}
const closeModal = () =>{
    return {
        type: CLOSE_MODAL
    }
}
const setUser = (user) =>{
    return {
        type: SET_USER,
        payload: user
    }
}
const getReadyToEdit = (obj) =>{
    return {
        type: GET_READY_FOR_EDIT,
        payload: obj
    }
}
const editTodo = (data) =>{
    return {
        type: EDIT_TODO,
        payload: data
    }
}
const addTodo = (data) =>{
    return {
        type: ADD_TODO,
        payload: data
    }
}
const loginUser = (data) =>{
    return {
        type: LOGIN_USER,
        payload: data
    }
}
const registerUser = (data) =>{
    return {
        type: REGISTER_USER,
        payload: data
    }
}
const toggleLogin = () =>{
    return {
        type: TOGGLE_LOGIN
    }   
}
const logoutUser = () =>{
    return {
        type: LOGOUT_USER
    } 
}
const getUser = (data) =>{
    console.log("We have some action")
    return {
        type: GET_USER,
        payload: data
    }
}

export default {
    handleInput,
    openModal,
    closeModal,
    setUser,
    getReadyToEdit,
    editTodo,
    addTodo,
    loginUser,
    registerUser,
    toggleLogin,
    logoutUser,
    getUser
}