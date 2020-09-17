export interface iReducerAction {
  type: string;
  payload: object | Array<object>;
  error: object | Array<object>;
}

export interface iReducerState {
  data: object | null;
  error: object | null;
  loading: boolean;
}

export interface iSagaOptions {
  payload: string | object;
  afterSagaSuccess?: void;
  afterSagaFailure?: void;
}

export interface iArtist {
  id: string;
  birthday: string;
  image: iImage;
  name: string;
  nationality: string;
  years: string;
}

export interface iImage {
  url: string;
}

export interface iDetails extends iReducerState {
  data: iArtist;
}
