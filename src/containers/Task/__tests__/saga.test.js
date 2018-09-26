import { put, call } from 'redux-saga/effects'
import Task from 'providers/task'
import { actions } from '../state/actions'
import { loadTasks, getPagination } from '../state/saga'

describe('Task saga', () => {
  it('should load tasks', () => {
    const tasks = [{ b: 1 }]
    const params = { page: 1 }
    const saga = loadTasks({ params })

    expect(saga.next().value).toEqual(put(actions.setLoading('tasks')))
    expect(saga.next().value).toEqual(call([Task, Task.all], params))
    expect(saga.next(tasks).value).toEqual(put(actions.setTasks(tasks)))
    expect(saga.next().value).toEqual(put(actions.setLoading(null)))
    expect(saga.next().done).toBe(true)
  })

  it('should load tasks more pages', () => {
    const tasks = [{ b: 1 }]
    const params = { page: 2 }
    const saga = loadTasks({ params })
    const pagination = {}

    expect(saga.next().value).toEqual(put(actions.setLoading('pagination')))
    expect(saga.next().value).toEqual(call([Task, Task.all], params))
    expect(saga.next(tasks).value).toEqual(put(actions.updateTasks(tasks)))
    expect(saga.next().value).toEqual(getPagination(tasks, params.page))
    expect(saga.next(pagination).value).toEqual(put(actions.setPagination(pagination)))
    expect(saga.next().value).toEqual(put(actions.setLoading(null)))
    expect(saga.next().done).toBe(true)
  })
})
