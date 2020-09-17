import React, { useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HomeReduxTypes } from '../../../utils/Types';
import List from '../components/list';
import Spinner from '../components/spinner';

import homeActions from '../redux/actions';

import { HomeStyles } from './styles';

const Home = () => {
  const { container } = HomeStyles;
  const dispatch = useDispatch();
  const listToDisplay = useSelector((state: HomeReduxTypes) => state.list);
  const getList = useCallback(() => dispatch(homeActions.getList()), [dispatch]);

  useEffect(() => {
    getList();
  }, []);

  return (
    <View style={container}>
      {listToDisplay.loading && <Spinner />}
      {listToDisplay.data && <List popular_artists={listToDisplay.data.popular_artists} />}
    </View>
  );
};

export default Home;
