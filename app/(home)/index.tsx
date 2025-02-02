import { useRouter } from 'expo-router/build/hooks';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const router = useRouter();
  const handleProfile = () => {
    router.push('/profile');
  };

  return (
    <SafeAreaView edges={['top']} className="flex-1 gap-8 bg-white px-6">
      <View className="flex-row items-center justify-between">
        <Text className="text-4xl font-black">Youknow</Text>
        <Pressable onPress={handleProfile}>
          <View className="h-12 w-12 items-center justify-center rounded-full bg-gray-200">
            <Text className="font-bold">DD</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
