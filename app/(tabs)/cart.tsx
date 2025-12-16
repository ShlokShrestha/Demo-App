import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { userCache, userVar } from "@/components/localstate/Cache";
import { GET_USER } from "@/components/localstate/LocalQuery";
import { useReactiveVar } from "@apollo/client";

const Dashboard = () => {
  const userData = useReactiveVar(userVar);

  const handleLogin = () => {
    const newUser = { id: "1", name: "Shlok Shrestha" };
    userCache.writeQuery({
      query: GET_USER,
      data: {
        user: userVar(newUser),
      },
    });
  };
  
  return (
    <View className="flex-1 justify-center items-center space-y-3">
      <Text className="text-2xl font-bold">
        User: {userData?.name || "No User"}
      </Text>
      <TouchableOpacity
        onPress={handleLogin}
        className="text-lg bg-black px-6 py-2 rounded text-white"
      >
        Login
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
