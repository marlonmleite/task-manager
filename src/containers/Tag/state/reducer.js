import { createReducer, upsert, deleteItem } from 'core/utils/redux'
import { types } from './actions'

export const initState = {
  tags: [],
  loading: null,
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
  [types.SET_TAGS]: (state, { tags }) => ({ ...state, tags }),
  [types.UPDATE_TAGS]: (state, { tags }) => ({ ...state, tags: [...state.tags, ...tags] }),
  [types.SET_LOADING]: (state, { loading }) => ({ ...state, loading }),
  [types.OPEN_MODAL]: (state, { open, item }) => ({ ...state, modal: { open, item } }),
  [types.SET_MODAL_ITEM]: (state, { item }) => ({ ...state, modal: { ...state.modal, item } }),
  [types.DELETE_TAG]: (state, { id }) => ({ ...state, tags: deleteItem(state.tags, id) }),
  [types.UPSERT_TAG]: (state, { tag }) => ({ ...state, tags: upsert(state.tags, tag) }),
  [types.SET_PAGINATION]: (state, { pagination }) => ({ ...state, pagination }),
}

export default createReducer(initState, reducer)
