import { put, call } from 'redux-saga/effects'
import Task from 'providers/task'
import { actions } from '../state/actions'
import { loadTasks } from '../state/saga'

describe('Task saga', () => {
  it('should load tasks', () => {
    const tasks = [{ b: 1 }]
    const saga = loadTasks()

    expect(saga.next().value).toEqual(put(actions.setLoading('tasks')))
    expect(saga.next().value).toEqual(call([Task, Task.all]))
    expect(saga.next(tasks).value).toEqual(put(actions.setTasks(tasks)))
    expect(saga.next().value).toEqual(put(actions.setLoading(null)))
    expect(saga.next().done).toBe(true)
  })
})
