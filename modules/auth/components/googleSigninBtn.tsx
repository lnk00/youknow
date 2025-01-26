import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import React from "react";
import { useRouter } from "expo-router";
import { supabase } from "../../../lib/supabase";

export default function GoogleSigninBtn() {
  const router = useRouter();
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/youtube"],
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
  });

  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Icon}
      color={GoogleSigninButton.Color.Dark}
      onPress={async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          if (userInfo.data?.idToken) {
            const { error } = await supabase.auth.signInWithIdToken({
              provider: "google",
              token: userInfo.data.idToken,
            });
            if (!error) {
              router.replace("/");
            }
          } else {
            throw new Error("no ID token present!");
          }
        } catch (error: any) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      }}
    />
  );
}
