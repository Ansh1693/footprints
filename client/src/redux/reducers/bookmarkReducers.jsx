import {
	BOOKMARK_LIST_REQUEST,
	BOOKMARK_LIST_SUCCESS,
	BOOKMARK_LIST_FAIL,
	BOOKMARK_CREATE_REQUEST,
	BOOKMARK_CREATE_SUCCESS,
	BOOKMARK_CREATE_FAIL,
	BOOKMARK_DELETE_REQUEST,
	BOOKMARK_DELETE_SUCCESS,
	BOOKMARK_DELETE_FAIL,
	BOOKMARK_UPDATE_REQUEST,
	BOOKMARK_UPDATE_SUCCESS,
	BOOKMARK_UPDATE_FAIL,
} from '../constants/bookmarkConstants'

const bookmarksInitialState = {
	bookmarks: [],
	loading: false,
	error: null,
}

export const bookmarksReducer = (state = bookmarksInitialState, action) => {
	switch (action.type) {
		case BOOKMARK_LIST_REQUEST:
		case BOOKMARK_CREATE_REQUEST:
		case BOOKMARK_DELETE_REQUEST:
		case BOOKMARK_UPDATE_REQUEST:
			return { ...state, loading: true }
		case BOOKMARK_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				bookmarks: action.payload,
				error: null,
			}
		case BOOKMARK_CREATE_SUCCESS:
			return {
				...state,
				loading: false,
				bookmarks: [...state.bookmarks, action.payload],
				error: null,
			}
		case BOOKMARK_DELETE_SUCCESS:
			return {
				...state,
				loading: false,
				bookmarks: state.bookmarks.filter(
					(bookmark) => bookmark._id !== action.payload
				),
				error: null,
			}
		case BOOKMARK_UPDATE_SUCCESS:
			const updatedBookmarks = state.bookmarks.map((bookmark) =>
				bookmark._id === action.payload._id ? action.payload : bookmark
			)
			return {
				...state,
				loading: false,
				bookmarks: updatedBookmarks,
				error: null,
			}
		case BOOKMARK_LIST_FAIL:
		case BOOKMARK_CREATE_FAIL:
		case BOOKMARK_DELETE_FAIL:
		case BOOKMARK_UPDATE_FAIL:
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}
