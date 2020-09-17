import { iArtist, iDetails, iReducerState } from './Interfaces';

export type RootStackTypes = {
  Home: string | undefined,
  Details: string | undefined,
};

export type HomeReduxTypes = {
  list: iReducerState,
};

export type DetailsReduxTypes = {
  details: iDetails,
};

export type ListComponentTypes = {
  data: PopularArtistType,
};

export type PopularArtistType = {
  popular_artists: ArtistsType,
};

export type ArtistsType = {
  artists: Array<iArtist>,
};

export type ArtistType = {
  artist: iArtist,
};

export type NavigationType = {
  goBack?: void,
};
