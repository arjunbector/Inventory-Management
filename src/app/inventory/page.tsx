import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import InventoryList from "./InventoryList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory",
  description: "Inventory page",
};

const InventoryPage = () => {
  return (
    <MaxWidthWrapper>
      <InventoryList />
    </MaxWidthWrapper>
  );
};

export default InventoryPage;
