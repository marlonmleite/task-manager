import Api from './api/mock-api'

const path = '/tag'

const Tag = {
  all(filters) {
    const params = { ...filters, sortBy: 'name', order: 'asc', limit: Tag.getPageLimit() }

    return Api.request(path, { params })
  },

  delete(id) {
    return Api.request(`${path}/${id}`, { method: 'DELETE' })
  },

  create(data) {
    return Api.request(path, { data, method: 'POST' })
  },

  update(data) {
    return Api.request(`${path}/${data.id}`, { data, method: 'PUT' })
  },

  save(tag) {
    return tag.id ? Tag.update(tag) : Tag.create(tag)
  },

  getPageLimit() {
    return 10
  },
}

export default Tag
