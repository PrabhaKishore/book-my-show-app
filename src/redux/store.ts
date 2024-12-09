import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/actions/rootSaga";
import rootReducer from "../redux/reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { rootReducer },
  middleware: (getDefaultMddleware) =>
    getDefaultMddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
