import { NavigationContainer } from "@react-navigation/native"
import { View, ActivityIndicator, StyleSheet} from "react-native"
import AuthStack from "./AuthStack"
import { COLORS } from "../shared/constants/theme"

const AppNavigator = () => {
    return (
        <NavigatorContainer>
            <AuthStack />
        </NavigatorContainer>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
    },
});

export default AppNavigator;