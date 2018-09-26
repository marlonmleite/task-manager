import random from 'lodash/random'
import mock from './mock'

const basePath = '/todo/v1/tag'

const all = {
  method: 'GET',
  path: basePath,
  handler: () => mock,
}

const one = {
  method: 'GET',
  path: `${basePath}/{id}`,
  handler: req => mock.find(item => item.id === req.params.id),
}

const create = {
  method: 'POST',
  path: basePath,
  handler: req => ({
    ...req.payload,
    id: random(10, 100),
  }),
}

const update = {
  method: 'PUT',
  path: `${basePath}/{id}`,
  handler: req => req.payload,
}

const destroy = {
  method: 'DELETE',
  path: `${basePath}/{id}`,
  handler: () => null,
}

export default {
  all,
  one,
  create,
  update,
  destroy,
}
