import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

// const DEFAULT_STATE = {
//   searchTerm: ''
// }
// const setSearchTerm = (state, action) => Object.assign({}, state, {searchTerm: action.payload});
//
//
// const rootReducer = (state = DEFAULT_STATE, action) => {
//   switch (action.type) {
//     case SET_SEARCH_TERM:
//       return setSearchTerm(state, action);
//     default:
//       return state;
//   }
// };

const searchTerm = (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const apiData = (state = {}, action) => {
  if (action.type === ADD_API_DATA) {
    return Object.assign({}, state, { [action.payload.imdbID]: action.payload });
  }
  return state;
};

const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
