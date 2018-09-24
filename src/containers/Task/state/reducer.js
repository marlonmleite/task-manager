import { createReducer, upsert, deleteItem } from 'core/utils/redux'
import { types } from './actions'
import { VIEW_TYPE } from '../utils'

export const initState = {
  tasks: [],
  loading: null,
  viewType: VIEW_TYPE.DAY,
  completed: null,
  modal: {
    open: null,
    item: null,
  },
  pagination: {
    page: 1,
    hasMore: true,
  },
}

const reducer = {
  [types.SET_TASKS]: (state, { tasks }) => ({ ...state, tasks }),
  [types.UPDATE_TASKS]: (state, { tasks }) => ({ ...state, tasks: [...state.tasks, ...tasks] }),
  [types.SET_LOADING]: (state, { loading }) => ({ ...state, loading }),
  [types.SET_VIEW_TYPE]: (state, { viewType }) => ({ ...state, viewType }),
  [types.SET_COMPLETED]: (state, { completed }) => ({ ...state, completed }),
  [types.OPEN_MODAL]: (state, { open, item }) => ({ ...state, modal: { open, item } }),
  [types.SET_MODAL_ITEM]: (state, { item }) => ({ ...state, modal: { ...state.modal, item } }),
  [types.DELETE_TASK]: (state, { id }) => ({ ...state, tasks: deleteItem(state.tasks, id) }),
  [types.UPSERT_TASK]: (state, { task }) => ({ ...state, tasks: upsert(state.tasks, task) }),
  [types.SET_PAGINATION]: (state, { pagination }) => ({ ...state, pagination }),
}

export default createReducer(initState, reducer)
