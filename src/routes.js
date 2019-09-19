import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';

import Home from '~/pages/Home';
import Preload from '~/pages/Preload';
import UserList from '~/pages/UserList';
import Conversation from '~/pages/Conversation';

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
      UserList: {
        screen: UserList,
        navigationOptions: {
          header: Platform.OS === 'android' && null,
        },
      },
      Conversation: {
        screen: Conversation,
        navigationOptions: {
          header: Platform.OS === 'android' && null,
        },
      },
    },
    {
      initialRouteName: 'Preload',
    },
  ),
);

export default Routes;
