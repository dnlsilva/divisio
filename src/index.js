import React from 'react';
import {StatusBar} from 'react-native';

if (__DEV__) {
  import('~/config/ReactotronConfig');
}

import {color3} from '~/helpers/colors';
import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar backgroundColor={color3} />
    <Routes />
  </>
);

export default App;
