import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const setupGoogle = () => {
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/youtube"],
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    offlineAccess: true,
  });
};
