import createReducer from 'core/utils/redux'
import { types } from './actions'

export const initState = {
  tasks: [],
  loading: null,
}

const reducer = {
  [types.SET_TASKS]: (state, { tasks }) => ({ ...state, tasks }),
  [types.SET_LOADING]: (state, { loading }) => ({ ...state, loading }),
}

export default createReducer(initState, reducer)
