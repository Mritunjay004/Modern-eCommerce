import ProductCard from "./ProductCard";

const RecommendedList = ({ current, products }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900">
          Recommended Products
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) =>
            product.node.id === current ? null : (
              <ProductCard key={product.node.id} product={product} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendedList;
