import { Text, View } from 'react-native';
import { supabase } from '../../lib/supabase';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, ButtonText } from '@/components/ui/button';

export default function Profile() {
  const handleSignout = async () => {
    await GoogleSignin.signOut();
    await supabase.auth.signOut();
  };

  return (
    <SafeAreaView edges={['top']} className="flex-1 gap-8 bg-white p-6">
      <View className="flex-row items-center justify-between">
        <Text className="text-4xl font-black">Profile</Text>
      </View>
      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={handleSignout}
      >
        <ButtonText>signout</ButtonText>
      </Button>
    </SafeAreaView>
  );
}
