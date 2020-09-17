import { Dimensions } from 'react-native';
import { BLACK } from './colors';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const SHADOW_STYLES = {
  shadowColor: BLACK,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowRadius: 3,
  shadowOpacity: 0.24,
  elevation: 2,
};
