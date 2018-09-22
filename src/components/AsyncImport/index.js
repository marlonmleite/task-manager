import Loadable from 'react-loadable'
import { LoadingContent } from '../Loading'

const AsyncImport = config => Loadable({
  ...config,
  loading: LoadingContent,
})

export default AsyncImport
