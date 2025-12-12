import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DataTable from "@/components/DataTable";
import useGetHook from "@/hooks/useGetHook";
import { User, UserResponse } from "@/types/type";
import APIS from "@/constants/endpoint";
import { ColumnDef } from "@tanstack/react-table";

const UserList = () => {
  const { data, isLoading } = useGetHook<UserResponse>({
    queryKey: ["users"],
    url: APIS.USER,
  });
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  const columns: ColumnDef<User>[] = [
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "First Name",
      accessorKey: "firstName",
    },
    {
      header: "Last Name",
      accessorKey: "lastName",
    },
    {
      header: "Age",
      accessorKey: "age",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
  ];
  return (
    <SafeAreaView>
      <View className="items-center">
        <Text className="font-bold text-xl">User List</Text>
      </View>
      <DataTable data={data?.users} columns={columns} />
    </SafeAreaView>
  );
};

export default UserList;
