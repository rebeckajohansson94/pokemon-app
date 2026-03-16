import { Stack } from "expo-router";

// anpassar stack-navigationen för att dölja den inbyggda headern för tabs-layouten
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
