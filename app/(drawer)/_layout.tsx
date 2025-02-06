import { Drawer } from 'expo-router/drawer';
import { Header } from '../../components/header';
import { Text } from '../../components/ui/text';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View } from 'react-native';

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
  return (
    <DrawerContentScrollView scrollEnabled={false}>
      <View className="px-4">
        <Text className="text-2xl font-bold">Subjects</Text>
      </View>
    </DrawerContentScrollView>
  );
}
