import { Drawer } from 'expo-router/drawer';
import { Header } from '../../components/header';

export default function HomeLayout() {
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
