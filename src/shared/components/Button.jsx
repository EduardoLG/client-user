import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../constants/theme";
import AnimatedProps from "react-native/types_generated/Libraries/Animated/nodes/AnimatedProps";

const Button = ({ title, onPress, loading, variant = "primary", style, ...props }) => {
    const isSecondary = variant === "secondary";

    return(
        <TouchableOpacity
        style={[
                StyleSheet.button,
                isSecondary ? StyleSheet.buttonSecondary : StyleSheet.buttonPrimary,
                loading && StyleSheet.buttonDisabled,
                style
            ]}
            onPress={onPress}
            disabled={loading}
            activeOpacity={0.8}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={isSecondary ? COLORS.primary : COLORS.surface} />
            ) : (
                <Text style={[
                    style.text,
                    isSecondary ? StyleSheet.textSecondary : StyleSheet.textPrimary
                ]}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
  button: {
    paddingVertical: SPACING.md,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonPrimary: {
    backgroundColor: COLORS.primary,
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  text: {
    fontSize: FONT_SIZE.md,
    fontWeight: "700",
  },
  textPrimary: {
    color: COLORS.surface,
  },
  textSecondary: {
    color: COLORS.primary,
  },
});
export default Button;