import Featured from "@/components/page/home/Featured";
import Hero from "@/components/page/home/Hero";
import ProductCard from "@/components/page/home/ProductCard";
import nexiosInstance from "@/config/nexios.config";
import { TProduct } from "@/types/products.type";

export default async function Home() {
  const { data }: any = await nexiosInstance.get("/products", {
    cache: "no-store",
    next: {},
  });

  const products = data?.data as TProduct[];

  return (
    <div className="min-h-screen container mx-auto my-4 md:my-8">
      <h3 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
        {products?.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </h3>

      <Hero />

      <main>
        <h1>Product Features</h1>
        <Featured products={products} />
      </main>
    </div>
  );
}
