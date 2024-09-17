import {
	DOCUMENT_LIST_REQUEST,
	DOCUMENT_LIST_SUCCESS,
	DOCUMENT_LIST_FAIL,
	DOCUMENT_CREATE_REQUEST,
	DOCUMENT_CREATE_SUCCESS,
	DOCUMENT_CREATE_FAIL,
	DOCUMENT_DELETE_REQUEST,
	DOCUMENT_DELETE_SUCCESS,
	DOCUMENT_DELETE_FAIL,
	DOCUMENT_UPDATE_REQUEST,
	DOCUMENT_UPDATE_SUCCESS,
	DOCUMENT_UPDATE_FAIL,
} from '../constants/documentConstants'
import { toast } from 'react-hot-toast'
import {
	readDocument as read,
	createDocument as create,
	deleteDocument as deleteDocumentApi,
	updateDocument as update,
} from '@/helpers/utils/apis/crud/Document'

// DOCUMENT LIST
export const getDocumentList =
	({ accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: DOCUMENT_LIST_REQUEST })

			const response = await read({ accessToken })

			if (response.status === 200) {
				dispatch({
					type: DOCUMENT_LIST_SUCCESS,
					payload: response.data,
				})
			} else {
				dispatch({
					type: DOCUMENT_LIST_FAIL,
					payload: 'Invalid Credentials',
				})
			}
		} catch (error) {
			dispatch({ type: DOCUMENT_LIST_FAIL, payload: error })
		}
	}

// CREATE DOCUMENT
export const createDocument =
	({ documentObject, accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: DOCUMENT_CREATE_REQUEST })

			//logic

			const response = await create({
				accessToken,
				documentObject,
			})

			// console.log(response)

			if (response.status === 200) {
				toast.success('Document created successfully')
				dispatch(getDocumentList({ accessToken }))
			} else {
				dispatch({
					type: DOCUMENT_CREATE_FAIL,
					payload: 'Invalid Credentials',
				})
			}

			dispatch({ type: DOCUMENT_CREATE_SUCCESS, payload: data })
		} catch (error) {
			dispatch({ type: DOCUMENT_CREATE_FAIL, payload: error })
		}
	}

// DELETE DOCUMENT
export const deleteDocument =
	({ documentObject, accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: DOCUMENT_DELETE_REQUEST })

			const response = await deleteDocumentApi({
				accessToken,
				documentObject,
			})

			if (response.status === 200) {
				dispatch({
					type: DOCUMENT_DELETE_SUCCESS,
					payload: documentObject.id,
				})
				toast.success('Document deleted successfully')
			} else {
				dispatch({
					type: DOCUMENT_DELETE_FAIL,
					payload: 'Invalid Credentials',
				})

				toast.error('Document deletion failed')
			}

			//api logic
		} catch (error) {
			dispatch({ type: DOCUMENT_DELETE_FAIL, payload: error })
		}
	}

// UPDATE DOCUMENT
export const updateDocument =
	({ documentObject, accessToken }) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: DOCUMENT_UPDATE_REQUEST })
			//logic
			const response = await update({
				accessToken,
				documentObject,
			})

			if (response.status === 200) {
				toast.success('Document updated successfully')
				dispatch({
					type: DOCUMENT_UPDATE_SUCCESS,
					payload: documentObject,
				})
			} else {
				dispatch({
					type: DOCUMENT_UPDATE_FAIL,
					payload: 'Invalid Credentials',
				})
			}
		} catch (error) {
			dispatch({ type: DOCUMENT_UPDATE_FAIL, payload: error })
		}
	}

export const setUpdateDocument = (document) => async (dispatch, getState) => {
	dispatch({ type: DOCUMENT_UPDATE_REQUEST })
	dispatch({ type: DOCUMENT_UPDATE_SUCCESS, payload: document })
}
