import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { SKY_BLUE } from '../../../../utils/colors';
import { SpinnerStyles } from './styles';

const Spinner = () => {
  const { container } = SpinnerStyles;
  return (
    <View style={container}>
      <ActivityIndicator size="large" color={SKY_BLUE} />
    </View>
  );
};

export default Spinner;
