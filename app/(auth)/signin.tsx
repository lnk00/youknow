import React from 'react';
import { View } from 'react-native';
import GoogleSigninBtn from '../../modules/auth/components/googleSigninBtn';

export default function Signin() {
  return (
    <View className="flex-1 items-center justify-center">
      <GoogleSigninBtn />
    </View>
  );
}
