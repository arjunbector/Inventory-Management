"use client";
import LoadingIndicator from "@/components/loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import AddRecords from "./AddRecords";

const ProductsList = () => {
  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("/api/product");
      const productsData = await res.json();
      return productsData.data;
    },
  });
  console.log(data);
  console.log(isLoading);
  console.log(error);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <AddRecords />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Id</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Supplier</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((product: any) => {
            return (
              <TableRow>
                <TableCell>{product.productId}</TableCell>
                <TableCell>{product.category.name}</TableCell>
                <TableCell>{product.supplier.name}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description || "-"}</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsList;