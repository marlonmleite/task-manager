import reducer, { initState } from '../state/reducer'
import { actions } from '../state/actions'

describe('Task reducer', () => {
  it('should set tasks', () => {
    const tasks = [{ a: 1 }]
    const state = reducer(initState, actions.setTasks(tasks))

    expect(state.tasks).toBe(tasks)
  })

  it('should set loading', () => {
    const state = reducer(initState, actions.setLoading('abc'))

    expect(state.loading).toBe('abc')
  })
})
