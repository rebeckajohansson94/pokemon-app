import { Stack } from "expo-router";

// använder rootlayout enbart för att kunna dölja stack-headern, navigering i appen sköts enbart via tabs.
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
