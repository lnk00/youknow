import { Pressable, Text, View } from "react-native";
import { supabase } from "../../lib/supabase";

export default function Index() {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-teal-500">Subz</Text>
      <Pressable onPress={() => supabase.auth.signOut()}>
        <Text>signout</Text>
      </Pressable>
    </View>
  );
}
