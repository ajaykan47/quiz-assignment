import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './redux/reducer'
import initialState from './redux/initialState'
import ReduxAsyncQueue from 'redux-async-queue'
import { composeWithDevTools } from 'redux-devtools-extension'
import {history} from './history'

const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeWithDevTools(
		applyMiddleware(
			routerMiddleware(history),
			ReduxAsyncQueue,
			thunkMiddleware
		)
	)
)

export default store