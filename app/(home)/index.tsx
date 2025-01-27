import { Dimensions, ScrollView, Text, View } from "react-native";
import { supabase } from "../../lib/supabase";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

type Subscription = {
  snippet: {
    title: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
  contentDetails: {
    totalItemCount: number;
  };
};

export default function Index() {
  const [subz, setSubz] = useState<Array<Subscription>>([]);

  const handleSignout = async () => {
    await GoogleSignin.signOut();
    await supabase.auth.signOut();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokens = await GoogleSignin.getTokens();
        const res = await fetch(
          "https://www.googleapis.com/youtube/v3/subscriptions?mine=true&part=contentDetails,snippet&maxResults=50",
          {
            headers: {
              Authorization: "Bearer " + tokens.accessToken,
            },
          },
        );

        const body = await res.json();

        setSubz(body.items);

        console.log(body);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView className="flex-1 gap-8 bg-white px-6">
      <Text className="font-black text-4xl">Subz</Text>
      <ScrollView>
        {subz.map((sub, id) => (
          <View key={id} className="flex flex-row mb-4 items-center">
            <Image
              source={sub.snippet.thumbnails.default.url}
              contentFit="contain"
              style={{ height: 56, width: 56, borderRadius: 56, zIndex: 10 }}
            />
            <View
              className="bg-gray-100 rounded-lg -ml-8 h-20 p-3"
              style={{ width: Dimensions.get("window").width - 72 }}
            >
              <Text className="ml-8 font-semibold text-lg">
                {sub.snippet.title}
              </Text>
              <Text className="ml-8 opacity-50">
                {sub.contentDetails.totalItemCount} videos
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
