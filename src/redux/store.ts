import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import cartReducer from './reducers/cartSlice'
import productReducer from './reducers/productSlice'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
    },
    middleware: (getDefaultMiddleware)  => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState =ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
