import { useRouter } from 'expo-router';
import { Pressable, View } from 'react-native';
import { Button, ButtonIcon } from './ui/button';
import { MenuIcon } from 'lucide-react-native';
import { Text } from './ui/text';

export function Header() {
  const router = useRouter();
  const handleProfile = () => {
    router.push('/profile');
  };

  return (
    <View className="flex-row items-center justify-between">
      <Button className="rounded-full">
        <ButtonIcon as={MenuIcon} />
      </Button>
      <Pressable onPress={handleProfile}>
        <View className="h-12 w-12 items-center justify-center rounded-full bg-gray-200">
          <Text className="font-bold">DD</Text>
        </View>
      </Pressable>
    </View>
  );
}
