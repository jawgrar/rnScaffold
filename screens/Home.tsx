import React, {FC} from 'react';
import {Text, View, Button} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import ProfileInfo from '../components/ProfileInfo';

interface HomeProps {
  user: FirebaseAuthTypes.User;
}

const HomeScreen: FC<HomeProps> = ({user}) => {
  const {displayName, email} = user;

  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      // TODO: Log exception using a logger service
      console.error(error);
    }
  };

  return (
    <View
      testID={'homeScreen'}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ProfileInfo displayName={displayName} email={email}></ProfileInfo>
      <Button
        title={'Sign out'}
        onPress={signOut}
        testID="signOutnButton"></Button>
    </View>
  );
};

export default HomeScreen;
