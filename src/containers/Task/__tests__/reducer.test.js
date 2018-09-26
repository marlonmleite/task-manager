import reducer, { initState } from '../state/reducer'
import { actions } from '../state/actions'

describe('Task reducer', () => {
  it('should set tasks', () => {
    const tasks = [{ a: 1 }]
    const state = reducer(initState, actions.setTasks(tasks))

    expect(state.tasks).toBe(tasks)
  })

  it('should update tasks', () => {
    const tasks = [{ a: 1 }]

    reducer(initState, actions.setTasks(tasks))

    const newTasks = [...tasks, { a: 2 }]

    const state = reducer(initState, actions.updateTasks(newTasks))

    expect(state.tasks).toEqual(newTasks)
  })

  it('should set loading', () => {
    const state = reducer(initState, actions.setLoading('abc'))

    expect(state.loading).toBe('abc')
  })

  it('should set view type', () => {
    const state = reducer(initState, actions.setViewType('a'))

    expect(state.viewType).toBe('a')
  })

  it('should set completed', () => {
    const state = reducer(initState, actions.setCompleted(true))

    expect(state.completed).toBeTruthy()
  })

  it('should open modal', () => {
    const modal = { open: 'crud', item: { a: 1 } }
    const state = reducer(initState, actions.openModal(modal.open, modal.item))

    expect(state.modal).toEqual(modal)
  })

  it('should set modal item', () => {
    const item = { a: 1 }
    const state = reducer(initState, actions.setModalItem(item))

    expect(state.modal.item).toBe(item)
  })

  it('should delete task', () => {
    const tasks = [{ id: 1 }]
    const state = reducer(initState, actions.setTasks(tasks))
    const newState = reducer(state, actions.deleteTask(1))

    expect(newState.tasks).toEqual([])
  })

  it('should upsert task', () => {
    const task = { id: 1, name: 'a' }
    const tasks = []
    const state = reducer(initState, actions.setTasks(tasks))
    const newState = reducer(state, actions.upsertTask(task))

    expect(newState.tasks).toEqual([task])

    const updatedTask = { ...task, name: 'b' }
    const newStateUpdated = reducer(state, actions.upsertTask(updatedTask))

    expect(newStateUpdated.tasks).toEqual([updatedTask])
  })
})
