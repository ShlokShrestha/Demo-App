import { Redirect } from "expo-router";
import "./global.css";
export default function Index() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Redirect href="/(tabs)/dashboard" />;
}
