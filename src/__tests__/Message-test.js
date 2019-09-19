import React from 'react';
import {shallow, mount} from 'enzyme';
import {Message} from '~/components';

describe('Message', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Message />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Props validation', () => {
    describe('name', () => {
      it('have props on component', () => {
        const component = mount(<Message name="Daniel" />);
        expect(component.props().name).toEqual('Daniel');
      });
    });
    describe('message', () => {
      it('have props on component', () => {
        const component = mount(
          <Message message={{direction: 'incoming', value: 'Test Message'}} />,
        );
        expect(component.props().message.direction).toEqual('incoming');
        expect(component.props().message.value).toEqual('Test Message');
      });
    });
  });
});
