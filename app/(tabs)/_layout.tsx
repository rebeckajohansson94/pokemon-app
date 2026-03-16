import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="pokemon" options={{ title: "Pokémon" }} />
      <Tabs.Screen name="pokedex" options={{ title: "Pokédex" }} />
    </Tabs>
  );
}
