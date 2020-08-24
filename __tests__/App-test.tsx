/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('@react-native-firebase/auth', () => {
  return () => ({
    auth: jest.fn(),
  });
});

jest.mock('@react-native-community/google-signin', () => {
  return {
    GoogleSignin: {
      configure: jest.fn(),
    },
  };
});
jest.mock('react-native-gesture-handler', () => {});
jest.mock('@react-navigation/stack', () => {
  return {
    createStackNavigator: jest.fn(),
  };
});

it('renders correctly', async () => {
  renderer.create(<App />);
});
