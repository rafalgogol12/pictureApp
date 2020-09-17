import { all } from 'redux-saga/effects';
import { apiSaga } from '../../../base/redux/utils';
import { GET_LIST, SET_ARTIST } from './actions';

export function* watchHomeActions() {
  yield all([apiSaga(GET_LIST)(), apiSaga(SET_ARTIST)()]);
}
