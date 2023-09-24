import rootReducer from "./rootReducer.js"
import { applyMiddleware, thunkMiddleware } from "./middlewares.js"
import createStore from "./createStore.js"

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store