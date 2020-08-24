import {GoogleSignin} from '@react-native-community/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import MainStack from './navigation/MainStack';

GoogleSignin.configure({
  // TODO: make this configurable by env.
  webClientId:
    '668573933267-gf9js482ea3k1mscqko81jv2f0ggnm6v.apps.googleusercontent.com',
});

const App = () => {
  // TODO: move auth logic to an Auth Provider
  // Set an initializing state FOR Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  const manageUserState = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    auth().onAuthStateChanged(manageUserState);
  }, [manageUserState]);

  if (initializing)
    return (
      <SafeAreaView>
        <Text>initializing...</Text>
      </SafeAreaView>
    );

  return <MainStack user={user}></MainStack>;
};

export default App;
