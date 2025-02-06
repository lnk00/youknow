import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="profile"
        options={{ presentation: 'modal', gestureEnabled: true }}
      />
    </Stack>
  );
}
