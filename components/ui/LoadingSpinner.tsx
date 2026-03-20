import { colors } from "@/constants/colors";
import { ActivityIndicator } from "react-native";

// Reusable loading spinner shown while data is being fetched.
export default function LoadingSpinner() {
  return <ActivityIndicator size="small" color={colors.accent} />;
}
