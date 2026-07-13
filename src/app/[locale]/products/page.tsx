import { ProductList } from "@/features/products/components/ProductList";

export default function ProductsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-8">
      <h1 className="text-2xl font-semibold">Products</h1>
      <ProductList />
    </main>
  );
}
