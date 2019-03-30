import {CHANGE_SEARCH_FIELD} from './constants.js';

const initialState = {
	searchField: '',
	testing:''
}

export const searchRobots = (state = initialState, action = {}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField:action.payload})
			// same as return {...state, {searchField:action.payload}}
		default:
			return state;
	}
}