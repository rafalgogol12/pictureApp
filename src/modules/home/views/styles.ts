import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { LIGHT_GREY } from '../../../utils/colors';

export const HomeStyles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_GREY,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: getStatusBarHeight() + 10,
  },
});
