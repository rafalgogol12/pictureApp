import { call, put, takeEvery } from 'redux-saga/effects';
import { iSagaOptions } from '../../../utils/Interfaces';
import { FAILURE, REQUEST, SUCCESS } from '../consts';
import request from '../request';

const apiSaga = (type: string) => {
  function* callApi(action: iSagaOptions) {
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: type + SUCCESS,
        payload: response.data || response,
      });

      if (action.afterSagaSuccess) {
        yield call(action.afterSagaSuccess);
      }
    } catch (e) {
      yield put({
        type: type + FAILURE,
        error: e.errors || e,
      });

      if (action.afterSagaFailure) {
        yield call(action.afterSagaFailure);
      }
    }
  }

  return function* () {
    yield takeEvery(type + REQUEST, callApi);
  };
};

export default apiSaga;
