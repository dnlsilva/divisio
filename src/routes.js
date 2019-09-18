import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '~/pages/Home';
import Preload from '~/pages/Preload';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          header: null,
        },
      },
      Preload: {
        screen: Preload,
        navigationOptions: {
          header: null,
        },
      },
    },
    {
      initialRouteName: 'Home',
    },
  ),
);

export default Routes;
