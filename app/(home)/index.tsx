import { Pressable, Text, View } from "react-native";
import { supabase } from "../../lib/supabase";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const handleSignout = async () => {
    await GoogleSignin.signOut();
    await supabase.auth.signOut();
  };

  return (
    <SafeAreaView edges={["top"]} className="flex-1 gap-8 bg-white px-6">
      <View className="flex-row items-center justify-between">
        <Text className="font-black text-4xl">Subz</Text>
        <Pressable onPress={handleSignout}>
          <View className="w-12 h-12 rounded-full bg-gray-200 items-center justify-center">
            <Text className="font-bold">DD</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
