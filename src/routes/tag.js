import AsyncImport from 'components/AsyncImport'

const Tag = AsyncImport({
  loader: () => import('containers/Tag'/* webpackChunkName: 'tag' */),
})

const route = [
  {
    path: '/tags',
    main: Tag,
    title: 'Tags',
  },
]

export default route

