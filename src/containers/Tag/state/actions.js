export const types = {
  SET_TAGS: 'TAG/SET_TAGS',
  UPDATE_TAGS: 'TAG/UPDATE_TAGS',
  LOAD_TAGS: 'TAG/LOAD_TAGS',
  SET_LOADING: 'TAG/SET_LOADING',
  OPEN_MODAL: 'TAG/OPEN_MODAL',
  SET_MODAL_ITEM: 'TAG/SET_MODAL_ITEM',
  DELETE_TAG: 'TAG/DELETE',
  REMOVE_TAG: 'TAG/REMOVE',
  SAVE_TAG: 'TAG/SAVE',
  UPSERT_TAG: 'TAG/UPSERT',
  SET_PAGINATION: 'TAG/PAGINATION',
}

export const actions = {
  setTags: tags => ({ type: types.SET_TAGS, tags }),
  updateTags: tags => ({ type: types.UPDATE_TAGS, tags }),
  loadTags: params => ({ type: types.LOAD_TAGS, params }),
  setLoading: loading => ({ type: types.SET_LOADING, loading }),
  openModal: (open, item) => ({ type: types.OPEN_MODAL, open, item }),
  setModalItem: item => ({ type: types.SET_MODAL_ITEM, item }),
  deleteTag: id => ({ type: types.DELETE_TAG, id }),
  removeTag: id => ({ type: types.REMOVE_TAG, id }),
  saveTag: (tag, loading) => ({ type: types.SAVE_TAG, tag, loading }),
  upsertTag: tag => ({ type: types.UPSERT_TAG, tag }),
  setPagination: pagination => ({ type: types.SET_PAGINATION, pagination }),
}
