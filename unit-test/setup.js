import { useFakeTimers } from 'sinon'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'raf'

Enzyme.configure({ adapter: new Adapter() })

global.clock = useFakeTimers()
