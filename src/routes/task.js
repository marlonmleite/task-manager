import AsyncImport from 'components/AsyncImport'

const Task = AsyncImport({
  loader: () => import('containers/Task'/* webpackChunkName: 'task' */),
})

const route = [
  {
    path: '/tasks',
    main: Task,
    title: 'Tasks',
  },
]

export default route

