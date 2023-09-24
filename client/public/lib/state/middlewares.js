export const thunkMiddleware = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action);
};



export const applyMiddleware = (...middlewares) => store => {
    if (middlewares.length === 0) {
        return dispatch => dispatch;
    }
    if (middlewares.length === 1) {
        return middlewares[0](store);
    }
    const boundMiddlewares = middlewares.map(middleware =>
        middleware(store)
    )
    return boundMiddlewares.reduce((a, b) =>
        next => a(b(next))
    )
};