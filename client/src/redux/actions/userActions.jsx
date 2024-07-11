import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGOUT,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
	USER_DETAILS_REQUEST,
	USER_UPDATE_SUCCESS,
	USER_UPDATE_REQUEST,
	USER_UPDATE_FAIL,
} from '../constants/userConstants'

import {
	readUser as read,
	deleteUser,
	updateUser as update,
	readUser,
} from '@/helpers/utils/apis/crud/User'

// LOGIN ACTION
export const login =
	({ accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: USER_LOGIN_REQUEST })
			const response = await read({ accessToken })

			if (response.status === 200) {
				dispatch({
					type: USER_LOGIN_SUCCESS,
					payload: {
						...response.data,
						accessToken: accessToken,
					},
				})
			} else {
				dispatch({
					type: USER_LOGIN_FAIL,
					payload: 'Invalid Credentials',
				})
			}
		} catch (err) {
			dispatch({
				type: USER_LOGIN_FAIL,
				payload: err.message,
			})
		}
	}

// LOGOUT ACTION
export const logout = () => (dispatch) => {
	dispatch({ type: USER_LOGOUT })
}

// GET USER DETAILS;
export const getUserDetails =
	({ accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: USER_DETAILS_REQUEST })

			dispatch({
				type: USER_DETAILS_SUCCESS,
				payload: {
					...data,
				},
			})
		} catch (error) {
			dispatch({ type: USER_DETAILS_FAIL, payload: error.message })
		}
	}

//USER UPDATE ACTIONS
export const updateUserProfile =
	({ userObject, accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: USER_UPDATE_REQUEST })

			dispatch({ type: USER_UPDATE_SUCCESS, payload: data })
		} catch (error) {
			dispatch({ type: USER_UPDATE_FAIL, payload: error })
		}
	}
