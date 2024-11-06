import ProductCard from "@/components/page/home/ProductCard";
import { Carousel, CarouselItem } from "@/components/ui/carousel";

export default function Home() {
  const products = [
    {
      id: "1",
      name: "Laptop",
      description: "High-performance laptop",
      price: 999.99,
      image:
        "https://res.cloudinary.com/dqvlkjxrg/image/upload/v1730811607/rfdrditlkt54lupi3rqh.jpg",
    },
    {
      id: "2",
      name: "T-Shirt",
      description: "Cotton t-shirt",
      price: 19.99,
      image:
        "https://res.cloudinary.com/dqvlkjxrg/image/upload/v1730811607/rfdrditlkt54lupi3rqh.jpg",
    },
    // More products...
  ];
  return (
    <div className="min-h-screen container mx-auto my-4 md:my-8">
      <h3 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </h3>

      <section className="text-center py-10 bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <h1 className="text-4xl font-bold">Welcome to NextMart</h1>
        <p className="text-lg mt-4">
          Discover the best products tailored just for you.
        </p>
      </section>

      <main>
        <h1>Our Products</h1>
        <Carousel>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              {/* ProductCard as a Client Component */}
            </CarouselItem>
          ))}
        </Carousel>
      </main>
    </div>
  );
}
