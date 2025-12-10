import { View, Text } from "react-native";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Cart Screen</Text>
    </View>
  );
};

export default Dashboard;
