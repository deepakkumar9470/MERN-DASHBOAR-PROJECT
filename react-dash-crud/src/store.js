import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './redux/taskSlice'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: {
        task: taskReducer,
      },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store