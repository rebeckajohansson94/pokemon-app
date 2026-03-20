import { Stack } from "expo-router";

// Root layout is used to hide the default stack header, all navigation in the app is handled through the tab navigation.
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
