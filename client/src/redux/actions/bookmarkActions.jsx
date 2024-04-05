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
import axios from 'axios'
import { toast } from 'react-hot-toast'

// BOOKMARK LIST
export const getBookmarkList =
	({ accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: BOOKMARK_LIST_REQUEST })

			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/document/read`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)

			console.log(response)

			if (response.status === 200) {
				dispatch({
					type: BOOKMARK_LIST_SUCCESS,
					payload: response.data,
				})
			} else {
				dispatch({
					type: BOOKMARK_LIST_FAIL,
					payload: 'Invalid Credentials',
				})
			}

			//logic
		} catch (error) {
			dispatch({ type: BOOKMARK_LIST_FAIL, payload: error })
		}
	}

// CREATE BOOKMARK
export const createBookmark =
	({ bookmarkData, accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: BOOKMARK_CREATE_REQUEST })

			//logic

			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/document/create`,
				{ documentObject: { ...bookmarkData } },
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)

			console.log(response)

			if (response.status === 200) {
				toast.success('Bookmark created successfully')
				dispatch(getBookmarkList({ accessToken }))
			} else {
				dispatch({
					type: BOOKMARK_CREATE_FAIL,
					payload: 'Invalid Credentials',
				})
			}

			dispatch({ type: BOOKMARK_CREATE_SUCCESS, payload: data })
		} catch (error) {
			dispatch({ type: BOOKMARK_CREATE_FAIL, payload: error })
		}
	}

// DELETE BOOKMARK
export const deleteBookmark =
	({ bookmarkId, accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: BOOKMARK_DELETE_REQUEST })

			const response = await axios.delete(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/document/delete?document_id=${bookmarkId}`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)

			console.log(response)
			if (response.status === 200) {
				dispatch({ type: BOOKMARK_DELETE_SUCCESS, payload: bookmarkId })
				toast.success('Bookmark deleted successfully')
			} else {
				dispatch({
					type: BOOKMARK_DELETE_FAIL,
					payload: 'Invalid Credentials',
				})

				toast.error('Bookmark deletion failed')
			}

			//api logic
		} catch (error) {
			dispatch({ type: BOOKMARK_DELETE_FAIL, payload: error })
		}
	}

// UPDATE BOOKMARK
export const updateBookmark =
	({ updatedData, accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: BOOKMARK_UPDATE_REQUEST })
			//logic
			const response = await axios.patch(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/document/update`,
				{ documentObject: { ...updatedData } },
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)

			if (response.status === 200) {
				toast.success('Bookmark updated successfully')
				dispatch({
					type: BOOKMARK_UPDATE_SUCCESS,
					payload: response.data,
				})
			} else {
				dispatch({
					type: BOOKMARK_UPDATE_FAIL,
					payload: 'Invalid Credentials',
				})
			}
		} catch (error) {
			dispatch({ type: BOOKMARK_UPDATE_FAIL, payload: error })
		}
	}

export const setUpdateBookmark = (bookmark) => async (dispatch, getState) => {
	dispatch({ type: BOOKMARK_UPDATE_REQUEST })
	dispatch({ type: BOOKMARK_UPDATE_SUCCESS, payload: bookmark })
}
