import { SUCCESS } from '../../../base/redux/consts';
import { apiAction } from '../../../base/redux/utils';
import { iArtist } from '../../../utils/Interfaces';

const homePrefix = '@@home';

export const GET_LIST = `${homePrefix}/GET_LIST`;
export const SET_ARTIST = `${homePrefix}/SET_ARTIST`;

const homeActions = {
  getList: () => {
    return apiAction(GET_LIST, {
      payload: '{ popular_artists(size: 50) { artists { id name years birthday nationality image { url } } } }',
    });
  },
  setArtist: (artist: iArtist) => {
    console.log('setArtist', artist);
    return {
      type: SET_ARTIST + SUCCESS,
      payload: artist,
    };
  },
};

export default homeActions;
