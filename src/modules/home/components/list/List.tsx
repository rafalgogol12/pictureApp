import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { PopularArtistType } from '../../../../utils/Types';
import ListItem from '../listItem';
import { ListStyles } from './styles';

const List: FunctionComponent<PopularArtistType> = ({ popular_artists }) => {
  const { artists } = popular_artists;
  const { container } = ListStyles;

  return (
    <FlatList
      data={artists}
      renderItem={({ item }) => <ListItem artist={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={container}
    />
  );
};

export default List;
