import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducer'
import { bookmarksReducer } from './reducers/bookmarkReducers'
import { boardsReducer } from './reducers/boardReducers'

const initialState = {
	userInfo: { userInfo: {} },
	bookmarks: { bookmarks: [] },
	boards: { boards: [] },
}

const reducer = combineReducers({
	userInfo: userReducer,
	bookmarks: bookmarksReducer,
	boards: boardsReducer,
})

const middleware = [thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
