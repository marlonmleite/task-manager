import { fork, all } from 'redux-saga/effects'
import taskSaga from 'containers/Task/state/saga'
import tagSaga from 'containers/Tag/state/saga'

function* sagas() {
  yield all([
    fork(taskSaga),
    fork(tagSaga),
  ])
}

export default sagas
