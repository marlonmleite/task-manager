import { combineReducers } from 'redux'
import task from 'containers/Task/state/reducer'
import tag from 'containers/Tag/state/reducer'

const reducers = combineReducers({
  task,
  tag,
})

export default reducers
