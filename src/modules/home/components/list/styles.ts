import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const ListStyles = StyleSheet.create({
  container: {
    paddingBottom: getBottomSpace(),
  },
});
