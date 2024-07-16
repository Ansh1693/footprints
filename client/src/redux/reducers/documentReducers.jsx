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

const documentsInitialState = {
	documents: [],
	loading: false,
	error: null,
}

export const documentReducer = (state = documentsInitialState, action) => {
	switch (action.type) {
		case DOCUMENT_LIST_REQUEST:
		case DOCUMENT_CREATE_REQUEST:
		case DOCUMENT_DELETE_REQUEST:
		case DOCUMENT_UPDATE_REQUEST:
			return { ...state, loading: true }
		case DOCUMENT_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				documents: action.payload,
				error: null,
			}
		case DOCUMENT_CREATE_SUCCESS:
			return {
				...state,
				loading: false,
				documents: [...state.documents, action.payload],
				error: null,
			}
		case DOCUMENT_DELETE_SUCCESS:
			return {
				...state,
				loading: false,
				documents: state.documents.filter(
					(document) => document.id !== action.payload
				),
				error: null,
			}
		case DOCUMENT_UPDATE_SUCCESS:
			const updatedDocuments = state.documents.map((document) =>
				document.id === action.payload.id ? action.payload : document
			)
			return {
				...state,
				loading: false,
				documents: updatedDocuments,
				error: null,
			}
		case DOCUMENT_LIST_FAIL:
		case DOCUMENT_CREATE_FAIL:
		case DOCUMENT_DELETE_FAIL:
		case DOCUMENT_UPDATE_FAIL:
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}
