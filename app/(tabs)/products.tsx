import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

const Products = () => {
  const router = useRouter();

  const goToProduct = (id: string) => {
    router.push({
      pathname: "/productdetail/[id]",
      params: { id },
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Products List Screen
      </Text>
      <Button title="Go to Product Detail" onPress={() => goToProduct("1")} />
    </View>
  );
};

export default Products;
