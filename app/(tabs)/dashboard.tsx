import APIS from "@/constants/endpoint";
import useGetHook from "@/hooks/useGetHook";
import { ProductsResponse } from "@/types/type";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  RefreshControl,
  ActivityIndicator,
} from "react-native";

const Dashboard = () => {
  const router = useRouter();

  const goToProduct = (id: string | number) => {
    router.push({
      pathname: "/productdetail/[id]",
      params: { id },
    });
  };

  const { data, isLoading, refetch } = useGetHook<ProductsResponse>({
    queryKey: ["products"],
    url: APIS.PRODUCTS,
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!data?.products || data.products.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No products found.</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Products List</Text>
      </View>
      <FlatList
        data={data.products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 8 }}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 20,
              padding: 15,
              backgroundColor: "#f2f2f2",
              borderRadius: 10,
            }}
          >
            {item.thumbnail && (
              <Image
                source={{ uri: item.thumbnail }}
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 8,
                  marginBottom: 10,
                }}
                resizeMode="cover"
              />
            )}
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              {item.title}
            </Text>
            <Text style={{ marginBottom: 10 }}>Price: {item.price}</Text>
            <Button title="View Details" onPress={() => goToProduct(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default Dashboard;
