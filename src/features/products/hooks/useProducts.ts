"use client";

import { useMemo } from "react";
import { productsData } from "@/features/products/data";

export function useProducts() {
  return useMemo(() => productsData, []);
}
