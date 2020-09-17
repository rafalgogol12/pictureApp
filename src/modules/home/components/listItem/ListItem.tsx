import React, { FunctionComponent } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { ArtistType } from '../../../../utils/Types';
import { appURLS } from '../../../../utils/constans';
import homeActions from '../../redux/actions';

import { ListItemStyles } from './styles';

const ListItem: FunctionComponent<ArtistType> = ({ artist }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { item, imageStyles, textStyles } = ListItemStyles;
  const imageUrl = artist.image ? { uri: artist.image.url } : null;

  const moveToDetails = () => {
    dispatch(homeActions.setArtist(artist));
    navigation.push(appURLS.DETAILS);
  };

  return (
    <TouchableOpacity style={item} onPress={moveToDetails}>
      {imageUrl && <Image source={imageUrl} style={imageStyles} />}
      <Text style={textStyles}>{artist.name}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;
