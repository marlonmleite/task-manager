import { put, call, takeLatest } from 'redux-saga/effects'
import Task from 'providers/task'
import { actions, types } from './actions'

export function* loadTasks({ params }) {
  yield put(actions.setLoading('tasks'))

  try {
    const tasks = yield call([Task, Task.all], params)

    yield put(actions.setTasks(tasks))
  } catch (errors) {
    // TODO: call toaster to error
  } finally {
    yield put(actions.setLoading(null))
  }
}

export default function* root() {
  yield takeLatest(types.LOAD_TASKS, loadTasks)
}
