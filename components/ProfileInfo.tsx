import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';

interface ProfileInfoProps {
  displayName: string | null;
  email: string | null;
}

const ProfileInfo: FC<ProfileInfoProps> = ({displayName, email}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>{displayName || 'unknown'}</Text>
    {email && <Text style={{fontSize: 10, marginVertical: 8}}>{email}</Text>}
  </View>
);

export default memo(ProfileInfo);
