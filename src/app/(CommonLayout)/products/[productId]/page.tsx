import ProductAddToCartButton from "@/components/page/productDetails/ProductAddToCartButton";
import Reviews from "@/components/page/productDetails/Reviews";
import nexiosInstance from "@/config/nexios.config";
import { TProduct } from "@/types/products.type";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NextMart | Product",
  description: "Explore detailed information about our products",
};

const ProductDetail = async ({ params }: { params: { productId: string } }) => {
  const { data }: any = await nexiosInstance.get(
    `/products/${params.productId}`,
    {
      cache: "no-store",
      next: {},
    }
  );

  const product = data?.data as TProduct;

  return (
    <div className="container mx-auto p-4">
      <div className="lg:flex lg:space-x-8 lg:items-start">
        {/* Product Image */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <Image
            src={product.images}
            alt={product.name}
            width={500}
            height={300}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-600">
            Category: {product.category?.name}
          </p>
          <p className="text-2xl font-semibold text-green-600">
            ${product.price}
          </p>
          <p className="text-md text-gray-600">
            In Stock: {product.stockQuantity}
          </p>

          {/* Add to Cart Button */}
          <ProductAddToCartButton
            productId={product._id}
            stock={product.stockQuantity}
          />

          {/* Product Description */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Product Details
            </h2>
            <p className="text-gray-700 mt-2">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Customer Reviews
          </h2>
          {/* Add Review Button - Right aligned */}
          <Reviews productId={params.productId} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
