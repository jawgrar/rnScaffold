import React, {FC} from 'react';
import {Button} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import ProfileInfo from '../components/ProfileInfo';
import {ScreenCenteredView} from '../styled';

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
    <ScreenCenteredView testID={'homeScreen'}>
      <ProfileInfo displayName={displayName} email={email}></ProfileInfo>
      <Button
        title={'Sign out'}
        onPress={signOut}
        testID="signOutnButton"></Button>
    </ScreenCenteredView>
  );
};

export default HomeScreen;
