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

import {
	readBlok as read,
	createBlok as create,
	deleteBlok,
	updateBlok as update,
} from '@/helpers/utils/apis/crud/Board'

// BLOK LIST
export const getBlokList =
	({ accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: BLOK_LIST_REQUEST })

			const response = await read({ accessToken })

			if (response.status === 200) {
				dispatch({
					type: BLOK_LIST_SUCCESS,
					payload: response.data,
				})
			} else {
				dispatch({
					type: BLOK_LIST_FAIL,
					payload: 'Invalid Credentials',
				})
			}

			// Additional logic as needed
		} catch (error) {
			dispatch({ type: BLOK_LIST_FAIL, payload: error })
		}
	}

// CREATE Blok
export const createBlok =
	({ blokObject, accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: BLOK_CREATE_REQUEST })

			// Additional logic as needed
			//
			const response = await create({ accessToken, blokObject })

			dispatch({ type: BLOK_CREATE_SUCCESS, payload: data })
		} catch (error) {
			dispatch({ type: BLOK_CREATE_FAIL, payload: error })
		}
	}

// DELETE Blok
export const deleteBlok =
	({ blokObject, accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: BLOK_DELETE_REQUEST })

			const response = await deleteBlok({ accessToken, blokObject })

			if (response.status === 200) {
				dispatch({
					type: BLOK_DELETE_SUCCESS,
					payload: blokObject.id,
				})
			} else {
				dispatch({
					type: BLOK_DELETE_FAIL,
					payload: 'Invalid Credentials',
				})
			}

			// Additional API logic
		} catch (error) {
			dispatch({ type: BLOK_DELETE_FAIL, payload: error })
		}
	}

// UPDATE Blok
export const updateBlok =
	({ blokObject, accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: BLOK_UPDATE_REQUEST })

			// Additional logic

			const response = await update({ accessToken, blokObject })

			if (response.status === 200) {
				dispatch({
					type: BLOK_UPDATE_SUCCESS,
					payload: response.data,
				})
			} else {
				dispatch({
					type: BLOK_UPDATE_FAIL,
					payload: 'Invalid Credentials',
				})
			}
		} catch (error) {
			dispatch({ type: BLOK_UPDATE_FAIL, payload: error })
		}
	}
