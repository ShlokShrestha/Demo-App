import { View, Text } from "react-native";
import React from "react";

type Props = {};

const ProductDetail = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Product Detail</Text>
    </View>
  );
};

export default ProductDetail;
