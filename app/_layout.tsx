import { Stack } from "expo-router";

// Här wrappar jag hela appen i Stack, och anger att tabs ska ligga i vyn
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
