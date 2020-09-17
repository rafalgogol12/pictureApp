import { StyleSheet } from 'react-native';
import { GREY_WITH_APLHA } from '../../../../utils/colors';

export const SpinnerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: GREY_WITH_APLHA,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
