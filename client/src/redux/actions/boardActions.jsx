import axios from 'axios'
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

// BOARD LIST
export const getBoardList =
	({ accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: BOARD_LIST_REQUEST })

			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/blok/read`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)

			if (response.status === 200) {
				dispatch({
					type: BOARD_LIST_SUCCESS,
					payload: response.data,
				})
			} else {
				dispatch({
					type: BOARD_LIST_FAIL,
					payload: 'Invalid Credentials',
				})
			}

			// Additional logic as needed
		} catch (error) {
			dispatch({ type: BOARD_LIST_FAIL, payload: error })
		}
	}

// CREATE BOARD
export const createBoard =
	({ blokObject, accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: BOARD_CREATE_REQUEST })

			// Additional logic as needed

			dispatch({ type: BOARD_CREATE_SUCCESS, payload: data })
		} catch (error) {
			dispatch({ type: BOARD_CREATE_FAIL, payload: error })
		}
	}

// DELETE BOARD
export const deleteBoard =
	({ blokObject, accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: BOARD_DELETE_REQUEST })

			const response = await axios.delete(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/blok/delete?blok_Id=${blokObject._id}`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)

			if (response.status === 200) {
				dispatch({
					type: BOARD_DELETE_SUCCESS,
					payload: blokObject._id,
				})
			} else {
				dispatch({
					type: BOARD_DELETE_FAIL,
					payload: 'Invalid Credentials',
				})
			}

			// Additional API logic
		} catch (error) {
			dispatch({ type: BOARD_DELETE_FAIL, payload: error })
		}
	}

// UPDATE BOARD
export const updateBoard =
	({ blokObject, accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: BOARD_UPDATE_REQUEST })

			// Additional logic

			const response = await axios.patch(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/blok/update`,
				{ blokObject },
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)

			if (response.status === 200) {
				dispatch({
					type: BOARD_UPDATE_SUCCESS,
					payload: response.data,
				})
			} else {
				dispatch({
					type: BOARD_UPDATE_FAIL,
					payload: 'Invalid Credentials',
				})
			}
		} catch (error) {
			dispatch({ type: BOARD_UPDATE_FAIL, payload: error })
		}
	}
