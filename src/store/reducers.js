import { combineReducers } from 'redux'
import exampleReducer from 'containers/Example/state/reducer'
import task from 'containers/Task/state/reducer'

const reducers = combineReducers({
  exampleReducer,
  task,
})

export default reducers
