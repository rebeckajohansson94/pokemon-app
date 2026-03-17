import { colors } from "@/constants/colors";
import { ActivityIndicator } from "react-native";

export default function LoadingSpinner() {
  return <ActivityIndicator size="small" color={colors.accent} />;
}
