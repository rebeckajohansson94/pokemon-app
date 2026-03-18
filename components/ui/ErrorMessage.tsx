import { colors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginTop: 20,
    alignItems: "center",
    shadowColor: "#242424",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    color: colors.error,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "italic",
  },
});
