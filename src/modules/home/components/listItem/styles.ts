import { StyleSheet } from 'react-native';
import { GREY, TRANSPARENT } from '../../../../utils/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH, SHADOW_STYLES } from '../../../../utils/Globals';

export const ListItemStyles = StyleSheet.create({
  item: {
    width: SCREEN_WIDTH,
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT * 0.45,
    backgroundColor: GREY,
    ...SHADOW_STYLES,
  },
  imageStyles: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  textStyles: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: '500',
  },
  lastItemStyles: {
    marginBottom: 0,
    borderBottomColor: TRANSPARENT,
  },
});
