// sagas.js
import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { tasksList,addTask,updateTask,deleteTask } from './taskSlice';

function* taskSagaList(action) {
  try {
    const response = yield call(() =>
      axios.get('http://localhost:5000/api/task')
    );
    yield put(tasksList(response.data)); 
  } catch (error) {
    console.log(error)
  }
}



function* addTaskSaga(action) {
  try {
    const { title,desc } = action.payload;
    const response = yield call(
      axios.post('http://localhost:5000/api/task/create', { title,desc })     
    );
    yield put(addTask(response.data)); 
  } catch (error) {
    console.log(error)
  }
}



function* updateTaskSaga(action) {
  try {
    const { id, title,desc } = action.payload;
    yield call(() => axios.put(`http://localhost:5000/api/task/${id}`, { title,desc }));
    yield put(updateTask({ id, title, desc }));
  } catch (error) {
    console.log(error)
  }
}

function* removeTaskSaga(action) {
  try {
    const idToRemove = action.payload;
    yield call(() => axios.delete(`http://localhost:5000/api/task/${idToRemove}`));
    yield put(deleteTask(idToRemove));
  } catch (error) {
    console.log(error)
  }
}

function* watchTodos() {
  yield takeEvery('task/addTask', addTaskSaga);
  yield takeEvery('task/updateTask', updateTaskSaga);
  yield takeEvery('task/deleteTask', removeTaskSaga);
  yield takeEvery('task/tasksList', taskSagaList);
}

export default watchTodos;
