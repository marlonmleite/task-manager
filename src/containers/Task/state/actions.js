export const types = {
  SET_TASKS: 'TASK/SET_TASKS',
  LOAD_TASKS: 'TASK/LOAD_TASKS',
  SET_LOADING: 'TASK/SET_LOADING',
  SET_VIEW_TYPE: 'TASK/SET_VIEW_TYPE',
}

export const actions = {
  setTasks: tasks => ({ type: types.SET_TASKS, tasks }),
  loadTasks: params => ({ type: types.LOAD_TASKS, params }),
  setLoading: loading => ({ type: types.SET_LOADING, loading }),
  setViewType: viewType => ({ type: types.SET_VIEW_TYPE, viewType }),
}
