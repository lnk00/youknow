import { Drawer } from 'expo-router/drawer';
import { Header } from '../../components/header';
import { Text } from '../../components/ui/text';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={LearnList}
      screenOptions={{
        header: ({ navigation }) => (
          <Header drawerToggleCb={navigation.toggleDrawer} />
        ),
      }}
    ></Drawer>
  );
}

function LearnList() {
  const router = useRouter();

  return (
    <>
      <DrawerContentScrollView scrollEnabled={false} className="h-full flex-1">
        <View className="flex h-full flex-1 px-4">
          <Text size="2xl" bold>
            Subjects
          </Text>
        </View>
      </DrawerContentScrollView>

      <Button
        size="xl"
        className="m-12 mt-auto"
        onPress={() => router.push('/')}
      >
        <ButtonText>New subject</ButtonText>
        <ButtonIcon as={PlusIcon} />
      </Button>
    </>
  );
}
