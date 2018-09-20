export const types = {
  SET_TASKS: 'TASK/SET_TASKS',
  LOAD_TASKS: 'TASK/LOAD_TASKS',
  SET_LOADING: 'TASK/SET_LOADING',
}

export const actions = {
  setTasks: tasks => ({ type: types.SET_TASKS, tasks }),
  loadTasks: () => ({ type: types.LOAD_TASKS }),
  setLoading: loading => ({ type: types.SET_LOADING, loading }),
}
