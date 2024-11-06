const ProductAddToCartButton = ({ productId, stock }) => {
  //   const { addToCart } = useCart();

  return (
    <button
      //   onClick={() => addToCart(productId)}
      className="px-6 py-2 bg-blue-600 text-white rounded-lg"
      disabled={stock === 0}
    >
      {stock > 0 ? "Add to Cart" : "Out of Stock"}
    </button>
  );
};

export default ProductAddToCartButton;
