import { Slot, useRouter } from "expo-router";
import "../global.css";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace("/signin");
      }
    });

    supabase.auth.onAuthStateChange((event) => {
      switch (event) {
        case "SIGNED_IN":
          router.replace("/");
        case "SIGNED_OUT":
          router.replace("/signin");
      }
    });
  }, []);

  return <Slot />;
}
