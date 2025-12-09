import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Login Screen</Text>
      <TouchableOpacity
        onPress={() => router.push("/(tabs)/dashboard")}
        style={{
          backgroundColor: "#28a745",
          padding: 10,
          borderRadius: 5,
        }}
        activeOpacity={0.6}
      >
        <Text style={{ color: "white" }}>Navigate to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
