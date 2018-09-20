import Api from './api/mock-api'

const path = '/task'

const Task = {
  all() {
    return Api.request(path)
  },
}

export default Task
