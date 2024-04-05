import {
	BOARD_LIST_REQUEST,
	BOARD_LIST_SUCCESS,
	BOARD_LIST_FAIL,
	BOARD_CREATE_REQUEST,
	BOARD_CREATE_SUCCESS,
	BOARD_CREATE_FAIL,
	BOARD_DELETE_REQUEST,
	BOARD_DELETE_SUCCESS,
	BOARD_DELETE_FAIL,
	BOARD_UPDATE_REQUEST,
	BOARD_UPDATE_SUCCESS,
	BOARD_UPDATE_FAIL,
} from '../constants/boardConstants'

const boardsInitialState = {
	boards: [],
	loading: false,
	error: null,
}

export const boardsReducer = (state = boardsInitialState, action) => {
	switch (action.type) {
		case BOARD_LIST_REQUEST:
		case BOARD_CREATE_REQUEST:
		case BOARD_DELETE_REQUEST:
		case BOARD_UPDATE_REQUEST:
			return { ...state, loading: true }
		case BOARD_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				boards: action.payload,
				error: null,
			}
		case BOARD_CREATE_SUCCESS:
			return {
				...state,
				loading: false,
				boards: [...state.boards, action.payload],
				error: null,
			}
		case BOARD_DELETE_SUCCESS:
			return {
				...state,
				loading: false,
				boards: state.boards.filter(
					(board) => board._id !== action.payload
				),
				error: null,
			}
		case BOARD_UPDATE_SUCCESS:
			const updatedboards = state.boards.map((board) =>
				board._id === action.payload._id ? action.payload : board
			)
			return {
				...state,
				loading: false,
				boards: updatedboards,
				error: null,
			}
		case BOARD_LIST_FAIL:
		case BOARD_CREATE_FAIL:
		case BOARD_DELETE_FAIL:
		case BOARD_UPDATE_FAIL:
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}
