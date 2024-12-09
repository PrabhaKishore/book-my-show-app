import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchTasksFailure,
  fetchTasksStart,
  fetchTasksSuccess,
} from "./taskSlice";
import { getTasks } from "../../api/taskService";

function* fetchTasksSaga() {
  try {
    const tasks = yield call(getTasks);
    yield put(fetchTasksSuccess(tasks));
  } catch (error) {
    yield put(fetchTasksFailure(error));
  }
}

export default function* taskSaga() {
  yield takeLatest(fetchTasksStart.type, fetchTasksSaga);
}
