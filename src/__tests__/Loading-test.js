import 'react-native';
import React from 'react';
import {Loading} from '~/components';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Loading />);
});
