import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Alert
} from "react-native"
import { useForm, Controller } from "react-hook-form"
import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constants/theme"
import Input from "../../../shared/components/Input"
import Button from "../../../shared/components/Button"
import { useAuth } from "../hooks/useAuth"

import kinalSportsLogo from "../../../../assets/kinal_sports2.png"

const RegisterScreen = ({ navigation }) => {

    const { handleRegister, loading } = useAuth()
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            lastName: "",
            Username: "",
            phone: "",
            email: "",
            password: ""
        }
    })
 
    const onSubmit = async (data) => {
        try {
            await handleSubmit(data)

            Alert.alert(
                "Registro exitoso",
                "Tu cuenta ha sido creada. Ahora puedes iniciar sesion"
                [{text: "OK", onPress: () => navigation.navigate("Login")}]
            )
        } catch (error) {
            console.error(error)
            const message = error.response?.data?.message || "Error al registrarse"
            Alert.alert("Error", message)
        }
    }
 
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Image
                        source={kinalSportsLogo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
 
                <View>
                    <Controller
                        control={control}
                        rules={{ required: "El nombre es requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Nombre"
                                placeholder="Tu nombre"
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                error={errors.name?.message}
                            />
                        )}
                        name="name"
                    />
 
                    <Controller
                        control={control}
                        rules={{ required: "El apellido es requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Apellido"
                                placeholder="Tu apellido"
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                error={errors.lastName?.message}
                            />
                        )}
                        name="lastName"
                    />

                    <Controller
                        control={control}
                        rules={{ required: "El usuario es requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Usuario"
                                placeholder="nombre_usuario"
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                error={errors.Username?.message}
                            />
                        )}
                        name="Username"
                    />

                    <Controller
                        control={control}
                        rules={{ required: "El telefono es requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Telefono"
                                placeholder="Ej: 12345678"
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                error={errors.phone?.message}
                            />
                        )}
                        name="phone"
                    />

                    <Controller
                        control={control}
                        rules={{ required: "El correo es requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Telefono"
                                placeholder="correo@ejemplo.com"
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                error={errors.email?.message}
                            />
                        )}
                        name="email"
                    />

                    <Controller
                        control={control}
                        rules={{ required: "La contrasena es requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Contraseña"
                                placeholder="••••••••"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                error={errors.password?.message}
                            />
                        )}
                        name="password"
                    />
 
                    <Button
                        title="Registrate"
                        onPress={handleSubmit(onSubmit)}
                        style={styles.button}                    
                    />
 
                    <View style={styles.footer}>
                        <Text sytle={styles.footerText}>Ya tienes cuenta?</Text>
                        <Text
                            style={styles.link}
                            onPress={() => navigation.navigate("Login")}
                        >
                            Inicia Sesion
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        flexGrow: 1,
        padding: SPACING.xl,
        paddingVertical: SPACING.xxl,
    },
    header: {
        alignItems: "center",
        marginBottom: SPACING.xl,
        marginTop: SPACING.lg,
    },
    logo: {
        height: 60,
        width: 180,
        marginBottom: SPACING.xs,
    },
    subtitle: {
        fontSize: FONT_SIZE.md,
        color: COLORS.secondary,
        marginTop: SPACING.sm,
    },
    form: {
        width: "100%",
    },
    button: {
        marginTop: SPACING.lg,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: SPACING.xl,
        paddingBottom: SPACING.xxl,
    },
    footerText: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
    },
    link: {
        fontSize: FONT_SIZE.md,
        color: COLORS.primary,
        fontWeight: "700",
    },
});
export default RegisterScreen;