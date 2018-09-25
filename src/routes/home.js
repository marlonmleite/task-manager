import AsyncImport from 'components/AsyncImport'

const Home = AsyncImport({
  loader: () => import('containers/Home'/* webpackChunkName: 'home' */),
})

const route = [
  {
    path: '/',
    main: Home,
    title: 'Ínicio',
    exact: true,
  },
]

export default route

