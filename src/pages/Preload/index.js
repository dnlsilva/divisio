import React, {useContext, useEffect} from 'react';
import {Store} from '~/store';
import {Loading} from '~/components';

import resetAction from '~/helpers/navigationHandler';

const Preload = ({navigation}) => {
  const {logged} = useContext(Store);

  useEffect(() => {
    async function initialize() {
      setTimeout(() => {
        if (logged) {
          resetAction(navigation, 'UserList');
          return;
        }
        resetAction(navigation, 'Home');
        return;
      }, 500);
    }
    initialize();
  }, [logged, navigation]);
  return <Loading />;
};

export default Preload;
