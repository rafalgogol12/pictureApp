import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { GREY, LIGHT_GREY, SKY_BLUE, WHITE } from '../../../utils/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH, SHADOW_STYLES } from '../../../utils/Globals';

export const DetailsStyles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_GREY,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: getStatusBarHeight() + 10,
  },
  imageContainer: {
    ...SHADOW_STYLES,
    backgroundColor: GREY,
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingBottom: 45,
    width: SCREEN_WIDTH * 0.85,
    height: SCREEN_HEIGHT * 0.35,
    marginBottom: 20,
  },
  imageStyles: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textStyles: {
    fontSize: 16,
    marginTop: 10,
  },
  nameStyles: {
    fontWeight: '500',
  },
  backButtonStyles: {
    marginTop: 30,
    backgroundColor: SKY_BLUE,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backTextStyles: {
    fontSize: 14,
    color: WHITE,
  },
});
