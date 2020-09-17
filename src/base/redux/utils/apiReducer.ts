import { iReducerAction, iReducerState } from '../../../utils/Interfaces';
import { CLEAR, FAILURE, REQUEST, SUCCESS } from '../consts';

const initialState = {
  data: null,
  error: null,
  loading: false,
};

const apiReducer = (type: string) => {
  const makeTypes = (param: string) => [param + REQUEST, param + SUCCESS, param + FAILURE, param + CLEAR];
  const [REQUEST_TYPE, SUCCESS_TYPE, FAILURE_TYPE, CLEAR_TYPE] = makeTypes(type);

  return (state: iReducerState = initialState, action: iReducerAction) => {
    switch (action.type) {
      case REQUEST_TYPE:
        return {
          ...state,
          loading: true,
        };
      case SUCCESS_TYPE:
        return {
          data: action.payload,
          error: null,
          loading: false,
        };
      case FAILURE_TYPE:
        return {
          data: null,
          error: action.error,
          loading: false,
        };
      case CLEAR_TYPE:
        return initialState;
      default:
        return state;
    }
  };
};

export default apiReducer;
