import { combineReducers } from 'redux';
import { GET_LIST, SET_ARTIST } from '../../modules/home/redux/actions';
import { apiReducer } from './utils';

export default combineReducers({
  list: apiReducer(GET_LIST),
  details: apiReducer(SET_ARTIST),
});
