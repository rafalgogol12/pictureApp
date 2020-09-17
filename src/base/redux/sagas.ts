import { all, fork } from 'redux-saga/effects';
import { watchHomeActions } from '../../modules/home/redux/sagas';

export default function* rootSaga() {
  yield all([fork(watchHomeActions)]);
}
