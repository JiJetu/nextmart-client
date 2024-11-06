import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TProduct } from "@/types/products.type";
import Image from "next/image";
import Link from "next/link";

type TProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: TProductCardProps) => {
  return (
    <Card className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 duration-200">
      {/* Product Image */}
      <CardHeader className="relative overflow-hidden">
        <Image
          src={product.images}
          alt={product.name}
          width={300}
          height={200}
          className="object-cover w-full h-56 rounded-t-lg"
          priority
        />
        {/* <div className="absolute top-2 right-2 bg-white bg-opacity-90 text-xs font-medium text-gray-800 px-2 py-1 rounded">
          New
        </div> */}
      </CardHeader>

      {/* Product Information */}
      <CardContent className="p-4 space-y-2">
        <CardTitle className="text-lg font-semibold text-gray-900">
          {product.name}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {product.description.length > 80
            ? `${product.description.slice(0, 80)}...`
            : product.description}
        </CardDescription>
      </CardContent>

      {/* Product Price and Actions */}
      <CardFooter className="p-4 border-t border-gray-200 flex items-center justify-between gap-5">
        <span className="text-xl font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </span>
        <Link
          href={`products/${product._id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-500 transition-colors"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
