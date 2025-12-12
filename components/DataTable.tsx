import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";

const DataTable = ({ data, columns }: any) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View className="min-w-full mx-3 mb-4 border-2 border-gray-300">
        <View className="flex-row border-b border-gray-300 pb-2  bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header: any) => (
              <Text
                key={header.id}
                className="p-2 text-center font-bold text-gray-700 min-w-[100px]"
              >
                {header.column.columnDef.header}
              </Text>
            ))
          )}
        </View>

        <FlatList
          data={table.getRowModel().rows}
          keyExtractor={(row) => row.id}
          renderItem={({ item, index }) => (
            <View
              className={`flex-row border-b border-gray-200 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              {item.getVisibleCells().map((cell: any) => (
                <Text
                  key={cell.id}
                  className="p-2 text-center text-gray-800 min-w-[100px]"
                >
                  {cell.renderValue()}
                </Text>
              ))}
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default DataTable;
