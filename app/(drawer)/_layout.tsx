import { Drawer } from 'expo-router/drawer';
import { Header } from '../../components/header';
import { Text } from '../../components/ui/text';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={DrawerContent}
      screenOptions={{
        header: ({ navigation }) => (
          <Header drawerToggleCb={navigation.toggleDrawer} />
        ),
      }}
    ></Drawer>
  );
}

function DrawerContent() {
  return (
    <SafeAreaView className="px-8 py-16">
      <Text>custom content</Text>
    </SafeAreaView>
  );
}
