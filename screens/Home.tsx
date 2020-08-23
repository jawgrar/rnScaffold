import React, {FC} from 'react';
import {Text, View, Button} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

interface HomeProps {
  user: FirebaseAuthTypes.User;
}

const HomeScreen: FC<HomeProps> = ({user}) => {
  const {displayName, email} = user;

  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{displayName || 'unknown'}</Text>
      <Text style={{fontSize: 10, marginVertical: 8}}>{email}</Text>
      <Button title={'Sign out'} onPress={signOut}></Button>
    </View>
  );
};

export default HomeScreen;
