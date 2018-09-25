import { createReducer, upsert, deleteItem } from '../redux'

function SET_CUSTOMER(state, action) {
  return { ...state, ...action.newValue }
}

describe('Redux', () => {
  it('should create reducer', () => {
    const state = {}
    const reducer = createReducer(state, { SET_CUSTOMER })
    const result = reducer(state, { type: 'SET_CUSTOMER', newValue: { hi: true } })

    expect(result).toEqual({ hi: true })
  })

  it('should return default state when call reducer with undefined state', () => {
    const state = {}
    const reducer = createReducer(state, { SET_CUSTOMER })

    expect(reducer(undefined, { type: 'NOT_EXIST' })).toEqual({})
  })

  it('upsert in current item', () => {
    const items = [{ id: 1, name: 'item 1' }]
    const item = { id: 1, name: 'new item 1' }
    const newItems = upsert(items, item)

    expect(newItems[0]).toEqual(item)
  })

  it('upsert a new item', () => {
    const items = [{ id: 1, name: 'item 1' }]
    const item = { id: 2, name: 'item 2' }
    const newItems = upsert(items, item)

    expect(newItems).toEqual([...items, item])
  })

  it('delete a item', () => {
    const items = [{ id: 1, name: 'item 1' }]
    const newItems = deleteItem(items, 1)

    expect(newItems).toEqual([])
  })

  it('delete a non item', () => {
    const items = [{ id: 1, name: 'item 1' }]
    const newItems = deleteItem(items, 2)

    expect(newItems).toEqual(items)
  })
})

