import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { iArtist } from '../../../utils/Interfaces';
import { DetailsReduxTypes } from '../../../utils/Types';
import { DetailsStyles } from './styles';

const Details = ({ navigation }) => {
  const artist = useSelector((state: DetailsReduxTypes) => state.details);
  const { data }: { data: iArtist } = artist;
  const {
    container,
    imageContainer,
    imageStyles,
    textStyles,
    nameStyles,
    backButtonStyles,
    backTextStyles,
  } = DetailsStyles;
  const imageUrl = data && data.image ? { uri: data.image.url } : null;

  const doGoBack = () => navigation.goBack();

  return (
    <View style={container}>
      <View style={imageContainer}>{imageUrl && <Image source={imageUrl} style={imageStyles} />}</View>
      <Text style={[textStyles, nameStyles]}>{data.name}</Text>
      {data.nationality && <Text style={textStyles}>{data.nationality}</Text>}
      {data.years && <Text style={textStyles}>{data.years}</Text>}
      <TouchableOpacity onPress={doGoBack} style={backButtonStyles}>
        <Text style={backTextStyles}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
