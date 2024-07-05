import {
	BLOK_LIST_REQUEST,
	BLOK_LIST_SUCCESS,
	BLOK_LIST_FAIL,
	BLOK_CREATE_REQUEST,
	BLOK_CREATE_SUCCESS,
	BLOK_CREATE_FAIL,
	BLOK_DELETE_REQUEST,
	BLOK_DELETE_SUCCESS,
	BLOK_DELETE_FAIL,
	BLOK_UPDATE_REQUEST,
	BLOK_UPDATE_SUCCESS,
	BLOK_UPDATE_FAIL,
} from '../constants/blokConstants'

const bloksInitialState = {
	bloks: [],
	loading: false,
	error: null,
}

export const bloksReducer = (state = bloksInitialState, action) => {
	switch (action.type) {
		case BLOK_LIST_REQUEST:
		case BLOK_CREATE_REQUEST:
		case BLOK_DELETE_REQUEST:
		case BLOK_UPDATE_REQUEST:
			return { ...state, loading: true }
		case BLOK_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				bloks: action.payload,
				error: null,
			}
		case BLOK_CREATE_SUCCESS:
			return {
				...state,
				loading: false,
				bloks: [...state.bloks, action.payload],
				error: null,
			}
		case BLOK_DELETE_SUCCESS:
			return {
				...state,
				loading: false,
				bloks: state.bloks.filter((blok) => blok.id !== action.payload),
				error: null,
			}
		case BLOK_UPDATE_SUCCESS:
			const updatedBloks = state.bloks.map((blok) =>
				blok._id === action.payload.id ? action.payload : blok
			)
			return {
				...state,
				loading: false,
				bloks: updatedBloks,
				error: null,
			}
		case BLOK_LIST_FAIL:
		case BLOK_CREATE_FAIL:
		case BLOK_DELETE_FAIL:
		case BLOK_UPDATE_FAIL:
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}
