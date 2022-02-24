import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from 'redux-thunk'
import persistStore from "redux-persist/es/persistStore";

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store);