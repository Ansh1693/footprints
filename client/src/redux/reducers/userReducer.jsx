import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_DETAILS_FAIL,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_UPDATE_SUCCESS,
	USER_UPDATE_REQUEST,
	USER_UPDATE_FAIL,
	USER_UPDATE_RESET,
} from '../constants/userConstants'

//LOGIN REDUCER
const initialUserState = {
	userInfo: {},
	loading: false,
	error: null,
	success: false,
}

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
		case USER_DETAILS_REQUEST:
		case USER_UPDATE_REQUEST:
			return {
				...state,
				loading: true,
				success: false,
			}

		case USER_LOGIN_SUCCESS:
		case USER_DETAILS_SUCCESS:
		case USER_UPDATE_SUCCESS:
			return {
				...state,
				loading: false,
				userInfo: action.payload,
				success: true,
				error: null,
			}

		case USER_LOGIN_FAIL:
		case USER_DETAILS_FAIL:
		case USER_UPDATE_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
				success: false,
			}

		case USER_LOGOUT:
			return initialUserState

		default:
			return state
	}
}
