import Button from "@/components/ui/Button";
import { Colors } from "@/constants/Colors";
import { useRegisterUser } from "@/queries/auth";
import IconEye from "@expo/vector-icons/Ionicons";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const roles = ["patient", "doctor"];

export default function RegisterScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { mutate: registerUser, isPending } = useRegisterUser();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleRegister = () => {
    if (!name || !email || !password || !role) {
      Alert.alert("Por favor, completa todos los campos.");
      return;
    }

    registerUser(
      { name, email, password, role },
      {
        onSuccess: () => {
          Alert.alert("Registro exitoso", "Ahora puedes iniciar sesión.");
          router.back();
        },
        onError: (error) => {
          Alert.alert("Error al registrar", (error as Error).message);
        },
      }
    );
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Regístrate</Text>
        <View style={styles.wrapperInput}>
          <Text style={styles.label}>Nombre y Apellido</Text>
          <TextInput
            placeholder="Fernando Lopez"
            style={{ ...styles.input, marginVertical: 10 }}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.wrapperInput}>
          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput
            placeholder="email@gmail.com"
            style={{ ...styles.input, marginVertical: 10 }}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.wrapperInput}>
          <Text style={styles.label}>Contraseña</Text>
          <View style={{ marginVertical: 10 }}>
            <TextInput
              placeholder="********"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
            />
            <Pressable
              style={styles.wrapperIconEye}
              onPressIn={togglePasswordVisibility}
            >
              <IconEye
                name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                size={24}
                color={Colors.light.text}
              />
            </Pressable>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.label, { marginBottom: 10 }]}>
            Selecciona tu rol
          </Text>
          <View style={styles.containerSelectRole}>
            {roles.map((option) => {
              const isSelected = role === option;
              const label = option === "patient" ? "Paciente" : "Doctor";

              return (
                <Pressable
                  key={option}
                  onPress={() => setRole(option)}
                  style={[
                    styles.roleButton,
                    isSelected && {
                      borderColor: Colors.light.primary,
                      backgroundColor: Colors.light.primary + "20",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.roleButtonText,
                      isSelected && { color: Colors.light.primary },
                    ]}
                  >
                    {label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
        <View>
          <Text style={styles.footerText}>
            ¿Ya tienes una cuenta?{" "}
            <Text style={styles.footerLink}>
              <Link href="/(auth)/login">Inicia sesión</Link>
            </Text>
          </Text>
        </View>
        <View style={styles.containerButton}>
          <Button
            title={
              isPending ? (
                <ActivityIndicator size={14} color="#ffffff" />
              ) : (
                "Registrarse"
              )
            }
            style={styles.button}
            onPress={handleRegister}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.light.text,
  },
  label: {
    color: Colors.light.text,
    fontSize: 13,
    fontWeight: "600",
  },
  wrapperInput: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  wrapperIconEye: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  containerSelectRole: {
    flexDirection: "row",
    gap: 10,
  },
  roleButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "transparent",
  },
  roleButtonText: {
    textAlign: "center",
    color: Colors.light.text,
    fontWeight: "600",
  },
  footerText: {
    textAlign: "center",
    color: Colors.light.text,
    marginTop: 30,
  },
  footerLink: {
    color: Colors.light.primary,
    fontWeight: "bold",
  },
  containerButton: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    marginHorizontal: 0,
  },
});
