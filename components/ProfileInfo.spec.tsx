import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileInfo from './ProfileInfo';

test('renders correctly', () => {
  const tree = renderer
    .create(<ProfileInfo displayName="Lorem Ipsum" email="user@test.com" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
