import { productsData } from "@/features/products/data";

export function ProductList() {
  return (
    <ul className="flex flex-col gap-3">
      {productsData.map((product) => (
        <li key={product.id} className="border-b border-zinc-200 pb-3 dark:border-zinc-800">
          <p className="font-medium">{product.name}</p>
          <p className="text-sm text-zinc-500">{product.description}</p>
        </li>
      ))}
    </ul>
  );
}
