/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {GoogleSignin} from '@react-native-community/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import 'react-native-gesture-handler';
import MyStack from './navigation/MainStack';

GoogleSignin.configure({
  webClientId:
    '668573933267-gf9js482ea3k1mscqko81jv2f0ggnm6v.apps.googleusercontent.com',
});

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    auth().onAuthStateChanged(onAuthStateChanged);
  }, []);

  return (
    <>
      {initializing ? (
        <SafeAreaView>
          <Text>initializing...</Text>
        </SafeAreaView>
      ) : (
        <MyStack user={user}></MyStack>
      )}
    </>
  );
};

export default App;
