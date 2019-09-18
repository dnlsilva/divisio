import {StackActions, NavigationActions} from 'react-navigation';

export default function resetAction(navigation, route) {
  navigation.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: route})],
    }),
  );
}
