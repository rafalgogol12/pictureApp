import { iSagaOptions } from '../../../utils/Interfaces';
import { REQUEST } from '../consts';

const apiAction = (type: string, options: iSagaOptions) => {
  return {
    type: type + REQUEST,
    payload: options && options.payload,
    afterSagaSuccess: options && options.afterSagaSuccess,
    afterSagaFailure: options && options.afterSagaFailure,
  };
};

export default apiAction;
