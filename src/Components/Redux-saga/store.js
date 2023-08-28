import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
// import userReducer from "./userReducer";
import rootSaga from "./sagas";
import rootReducers from "../Reducers/rootReducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;


// import { applyMiddleware, createStore } from "redux";
// import createSagaMiddleware from 'redux-saga';
// // import userReducer from "./userreducer";
// import { rootSaga } from "./saga";
// import rootReucers from "./rootReducers/rootReducers";

// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(rootReucers, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);

// export default store;