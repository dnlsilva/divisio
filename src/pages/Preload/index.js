import React, {useContext, useEffect} from 'react';
import {Store} from '~/store';
import {Loading} from '~/components';

const Preload = ({navigation}) => {
  const {logged} = useContext(Store);
  useEffect(() => {
    if (logged) {
      navigation.navigate('Home');
      return;
    }
    navigation.navigate('Home');
    return;
  }, [logged, navigation]);
  return <Loading />;
};

export default Preload;
