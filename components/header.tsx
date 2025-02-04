import { useRouter } from 'expo-router';
import { Pressable, View } from 'react-native';
import { Button, ButtonIcon } from './ui/button';
import { MenuIcon } from 'lucide-react-native';
import { Text } from './ui/text';
import { SafeAreaView } from 'react-native-safe-area-context';

type IProps = {
  drawerToggleCb?: () => void;
};

export function Header({ drawerToggleCb }: IProps) {
  const router = useRouter();
  const handleProfile = () => {
    router.push('/profile');
  };

  return (
    <SafeAreaView edges={['top']}>
      <View className="flex-row items-center justify-between px-6">
        <Button className="rounded-full" onPress={drawerToggleCb}>
          <ButtonIcon as={MenuIcon} />
        </Button>
        <Pressable onPress={handleProfile}>
          <View className="h-12 w-12 items-center justify-center rounded-full bg-gray-200">
            <Text className="font-bold">DD</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
