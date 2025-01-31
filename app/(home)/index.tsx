import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  RefreshControlBase,
  Text,
  View,
} from "react-native";
import { supabase } from "../../lib/supabase";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { FlashList } from "@shopify/flash-list";

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
  const [subz, setSubz] = useState<Subscription[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string>("");
  const [subzNb, setSubzNb] = useState<number>(0);

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
          }
        );

        const body = await res.json();
        setSubz(body.items);
        setSubzNb(body.pageInfo.totalResults);
        setNextPageToken(body.nextPageToken);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const refetch = async () => {
    if (nextPageToken !== "" && subz.length < subzNb) {
      try {
        const tokens = await GoogleSignin.getTokens();
        const res = await fetch(
          "https://www.googleapis.com/youtube/v3/subscriptions?mine=true&part=contentDetails,snippet&maxResults=50&pageToken=" +
            nextPageToken,
          {
            headers: {
              Authorization: "Bearer " + tokens.accessToken,
            },
          }
        );

        const body = await res.json();
        setSubz((i) => i.concat(body.items));
        setNextPageToken(body.nextPageToken);
      } catch (error) {}
    }
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
      <FlashList
        data={subz}
        ListEmptyComponent={() => (
          <View className="flex-1 h-96 items-center justify-center">
            <ActivityIndicator />
          </View>
        )}
        renderItem={({ item, index }) => (
          <View key={index} className="flex flex-row mb-4 items-center">
            <Image
              source={item.snippet.thumbnails.default.url}
              contentFit="contain"
              style={{ height: 56, width: 56, borderRadius: 56, zIndex: 10 }}
            />
            <View
              className="bg-gray-100 rounded-lg -ml-8 h-20 p-3"
              style={{ width: Dimensions.get("window").width - 72 }}
            >
              <Text className="ml-8 font-semibold text-lg">
                {item.snippet.title}
              </Text>
              <Text className="ml-8 opacity-50">
                {item.contentDetails.totalItemCount} videos
              </Text>
            </View>
          </View>
        )}
        estimatedItemSize={100}
        onEndReached={refetch}
      />
    </SafeAreaView>
  );
}
