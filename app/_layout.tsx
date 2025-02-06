import { Slot, useRouter } from 'expo-router';
import '@/global.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '../global.css';
import { useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { setupGoogle } from '../lib/google';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import { Caveat_600SemiBold, useFonts } from '@expo-google-fonts/caveat';

setupGoogle();

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const router = useRouter();
  const [loaded, error] = useFonts({
    Caveat_600SemiBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace('/signin');
      }
    });

    supabase.auth.onAuthStateChange((event) => {
      switch (event) {
        case 'SIGNED_IN':
          router.replace('/');
        case 'SIGNED_OUT':
          router.replace('/signin');
      }
    });

    GoogleSignin.hasPreviousSignIn() && GoogleSignin.signInSilently();
  }, []);

  return (
    <GestureHandlerRootView>
      <GluestackUIProvider mode="light">
        <Slot />
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
