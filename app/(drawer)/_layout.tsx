import { Drawer } from 'expo-router/drawer';
import { Header } from '../../components/header';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        header: ({ navigation }) => (
          <Header drawerToggleCb={navigation.toggleDrawer} />
        ),
      }}
    ></Drawer>
  );
}
