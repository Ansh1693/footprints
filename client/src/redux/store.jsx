import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducer'
import { documentReducer } from './reducers/documentReducers'
import { bloksReducer } from './reducers/blokReducers'

const initialState = {
	userInfo: { userInfo: {} },
	documents: { documents: [] },
	bloks: { bloks: [] },
}

const reducer = combineReducers({
	userInfo: userReducer,
	documents: documentReducer,
	bloks: bloksReducer,
})

const middleware = [thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
