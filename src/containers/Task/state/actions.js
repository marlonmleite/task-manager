export const types = {
  SET_TASKS: 'TASK/SET_TASKS',
  UPDATE_TASKS: 'TASK/UPDATE_TASKS',
  LOAD_TASKS: 'TASK/LOAD_TASKS',
  SET_LOADING: 'TASK/SET_LOADING',
  SET_VIEW_TYPE: 'TASK/SET_VIEW_TYPE',
  SET_COMPLETED: 'TASK/SET_COMPLETED',
  OPEN_MODAL: 'TASK/OPEN_MODAL',
  SET_MODAL_ITEM: 'TASK/SET_MODAL_ITEM',
  DELETE_TASK: 'TASK/DELETE',
  REMOVE_TASK: 'TASK/REMOVE',
  SAVE_TASK: 'TASK/SAVE',
  UPSERT_TASK: 'TASK/UPSERT',
  SET_PAGINATION: 'TASK/PAGINATION',
}

export const actions = {
  setTasks: tasks => ({ type: types.SET_TASKS, tasks }),
  updateTasks: tasks => ({ type: types.UPDATE_TASKS, tasks }),
  loadTasks: params => ({ type: types.LOAD_TASKS, params }),
  setLoading: loading => ({ type: types.SET_LOADING, loading }),
  setViewType: viewType => ({ type: types.SET_VIEW_TYPE, viewType }),
  setCompleted: completed => ({ type: types.SET_COMPLETED, completed }),
  openModal: (open, item) => ({ type: types.OPEN_MODAL, open, item }),
  setModalItem: item => ({ type: types.SET_MODAL_ITEM, item }),
  deleteTask: id => ({ type: types.DELETE_TASK, id }),
  removeTask: id => ({ type: types.REMOVE_TASK, id }),
  saveTask: (task, loading) => ({ type: types.SAVE_TASK, task, loading }),
  upsertTask: task => ({ type: types.UPSERT_TASK, task }),
  setPagination: pagination => ({ type: types.SET_PAGINATION, pagination }),
}
