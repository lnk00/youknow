import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const getSubs = async (pageToken?: string) => {
  try {
    const tokens = await GoogleSignin.getTokens();
    const uri =
      "https://www.googleapis.com/youtube/v3/subscriptions?mine=true&part=contentDetails,snippet&maxResults=50" +
      (pageToken ? "&pageToken=" + pageToken : "");
    const res = await fetch(uri, {
      headers: {
        Authorization: "Bearer " + tokens.accessToken,
      },
    });

    return await res.json();
  } catch (error) {
    throw error;
  }
};
