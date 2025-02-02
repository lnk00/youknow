import { Pressable, Text, View } from 'react-native';
import { supabase } from '../../lib/supabase';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, ButtonText } from '@/components/ui/button';

export default function Index() {
  const handleSignout = async () => {
    await GoogleSignin.signOut();
    await supabase.auth.signOut();
  };

  return (
    <SafeAreaView edges={['top']} className="flex-1 gap-8 bg-white px-6">
      <View className="flex-row items-center justify-between">
        <Text className="text-4xl font-black">Subz</Text>
        <Pressable onPress={handleSignout}>
          <View className="h-12 w-12 items-center justify-center rounded-full bg-gray-200">
            <Text className="font-bold">DD</Text>
          </View>
        </Pressable>
      </View>
      <Button size="md" variant="solid" action="primary">
        <ButtonText>Hello World!</ButtonText>
      </Button>
    </SafeAreaView>
  );
}
