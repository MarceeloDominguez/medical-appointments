import Button from "@/components/ui/Button";
import { Colors } from "@/constants/Colors";
import IconEye from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Iniciar sesión</Text>
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
        <View>
          <Text style={styles.footerText}>
            ¿No tienes una cuenta?{" "}
            <Text style={styles.footerLink}>
              <Link href="/(auth)/register">Regístrate</Link>
            </Text>
          </Text>
        </View>
        <View style={styles.containerButton}>
          <Link href={"/(tabs)"} asChild>
            <Button title="Iniciar sesión" style={styles.button} />
          </Link>
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
  footerText: {
    textAlign: "center",
    color: Colors.light.text,
    marginTop: 20,
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
