import logger from 'redux-logger'
import { thunk } from 'redux-thunk'

let middleware = [logger, thunk];

export default middleware;