import { HANDLE_INPUT, OPEN_MODAL, CLOSE_MODAL, SET_USER, GET_READY_FOR_EDIT, EDIT_TODO, ADD_TODO, LOGIN_USER, REGISTER_USER, TOGGLE_LOGIN, LOGOUT_USER, GET_USER } from "./types.js"

export const handleInput = (input) =>{
    return {
        type: HANDLE_INPUT,
        payload: input
    }
}
export const openModal = () =>{
    return {
        type: OPEN_MODAL
    }
}
export const closeModal = () =>{
    return {
        type: CLOSE_MODAL
    }
}
export const setUser = (user) =>{
    return {
        type: SET_USER,
        payload: user
    }
}
export const getReadyToEdit = (obj) =>{
    return {
        type: GET_READY_FOR_EDIT,
        payload: obj
    }
}
export const editTodo = (data) =>{
    return {
        type: EDIT_TODO,
        payload: data
    }
}
export const addTodo = (data) =>{
    return {
        type: ADD_TODO,
        payload: data
    }
}
export const loginUser = (data) =>{
    return {
        type: LOGIN_USER,
        payload: data
    }
}
export const registerUser = (data) =>{
    return {
        type: REGISTER_USER,
        payload: data
    }
}
export const toggleLogin = () =>{
    return {
        type: TOGGLE_LOGIN
    }   
}
export const logoutUser = () =>{
    return {
        type: LOGOUT_USER
    } 
}
export const getUser = (data) =>{
    console.log("We have some action")
    return {
        type: GET_USER,
        payload: data
    }
}