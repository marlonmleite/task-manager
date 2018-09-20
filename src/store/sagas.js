import { fork, all } from 'redux-saga/effects'
import exampleSaga from 'containers/Example/state/saga'
import taskSaga from 'containers/Task/state/saga'

function* sagas() {
  yield all([
    fork(exampleSaga),
    fork(taskSaga),
  ])
}

export default sagas
