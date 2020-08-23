import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';

interface StackProps {
  user: FirebaseAuthTypes.User | null;
}
const Stack = createStackNavigator();

const MyStack: FC<StackProps> = ({user}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} user={user}></HomeScreen>}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
