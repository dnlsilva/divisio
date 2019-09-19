import React from 'react';
import {shallow, mount} from 'enzyme';
import {MessageInput} from '~/components';

describe('MessageInput', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<MessageInput />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Props validation', () => {
    describe('internal', () => {
      it('have props on component', () => {
        const component = mount(
          <MessageInput sending={true} text="Test text" />,
        );
        expect(component.props().sending).toEqual(true);
        expect(component.props().text).toEqual('Test text');
      });
    });
  });
});
