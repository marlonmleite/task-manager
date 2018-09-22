import createReducer from 'core/utils/redux'
import { types } from './actions'
import { VIEW_TYPE } from '../utils'

export const initState = {
  tasks: [],
  loading: null,
  viewType: VIEW_TYPE.DAY,
}

const reducer = {
  [types.SET_TASKS]: (state, { tasks }) => ({ ...state, tasks }),
  [types.SET_LOADING]: (state, { loading }) => ({ ...state, loading }),
  [types.SET_VIEW_TYPE]: (state, { viewType }) => ({ ...state, viewType }),
}

export default createReducer(initState, reducer)
