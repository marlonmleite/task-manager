import { put, call, takeLatest } from 'redux-saga/effects'
import Task from 'providers/task'
import { showSuccess, showError } from 'core/utils/toast'
import { actions, types } from './actions'

const msgError = 'Ocorreu um erro ao processar sua solicitação.'

export const getPagination = (tasks, page) => {
  const hasMore = tasks.length >= Task.getPageLimit()
  const pagination = {
    page,
    hasMore,
  }

  return pagination
}

export function* loadTasks({ params }) {
  const isFetchMore = params.page > 1
  const loadingType = isFetchMore ? 'pagination' : 'tasks'

  yield put(actions.setLoading(loadingType))

  try {
    const tasks = yield call([Task, Task.all], params)


    if (isFetchMore) {
      yield put(actions.updateTasks(tasks))

      const pagination = yield getPagination(tasks, params.page)

      yield put(actions.setPagination(pagination))
    } else {
      yield put(actions.setTasks(tasks))
    }
  } catch (errors) {
    yield showError(msgError)
  } finally {
    yield put(actions.setLoading(null))
  }
}

export function* removeTask({ id }) {
  yield put(actions.setLoading(`${id}`))

  try {
    yield call([Task, Task.delete], id)

    yield put(actions.deleteTask(id))

    yield showSuccess('A sua task foi removida.')
  } catch (errors) {
    yield showError(msgError)
  } finally {
    yield put(actions.setLoading(null))
  }
}

export function* saveTask({ task, loading = 'save' }) {
  const msg = `A sua task foi ${task.id ? 'atualizada' : 'criada'}.`
  yield put(actions.setLoading(loading))

  try {
    const saved = yield call([Task, Task.save], task)

    yield put(actions.upsertTask(saved))

    yield put(actions.setModalItem(saved))

    yield showSuccess(msg)
  } catch (errors) {
    yield showError(msgError)
  } finally {
    yield put(actions.setLoading(null))
  }
}

export default function* root() {
  yield takeLatest(types.LOAD_TASKS, loadTasks)
  yield takeLatest(types.REMOVE_TASK, removeTask)
  yield takeLatest(types.SAVE_TASK, saveTask)
}
