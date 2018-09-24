import find from 'lodash/find'
import merge from 'lodash/merge'
import reject from 'lodash/reject'

export const createReducer = (initialState, actions) => {
  return (state = initialState, action) => {
    const reducer = actions[action.type]

    return reducer ? reducer(state, action) : state
  }
}

export const upsert = (list, item) => {
  const current = find(list, { id: item.id })

  if (current) {
    merge(current, item)

    return [...list]
  }

  return [...list, item]
}

export const deleteItem = (list, id) => reject(list, item => item.id === id)
