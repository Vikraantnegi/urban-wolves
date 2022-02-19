import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store);