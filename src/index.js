import React from 'react';
import {StatusBar} from 'react-native';
if (__DEV__) {
  import('~/config/ReactotronConfig');
}

import {Provider} from '~/store';

import {color3} from '~/helpers/colors';
import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar backgroundColor={color3} />
    <Provider>
      <Routes />
    </Provider>
  </>
);

export default App;
