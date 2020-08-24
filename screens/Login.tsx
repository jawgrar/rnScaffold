import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';

interface LoginProps {}

const LoginScreen: FC<LoginProps> = () => {
  const onGoogleButtonPress = async () => {
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.info('user cancelled sign in');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.info('user authentication is in progress');
      } else {
        console.error(error);
      }
    }
  };

  return (
    <SafeAreaView
      testID={'loginScreen'}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onGoogleButtonPress}
        testID="googleSigninButton"
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
