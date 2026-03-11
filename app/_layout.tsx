import { Stack } from "expo-router";

// sätter upp stack-navigationen för hela appen och gömmer den inbyggda headern för tabs-layouten
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
