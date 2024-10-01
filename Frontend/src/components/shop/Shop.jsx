
import Product from "./product/Product";

const Shop = () => {
  
  return (
    <div className="max-w-7xl mx-auto px-4 pt-2 lg:px-0">
      <div className="text-center mb-6">
        <h1 className="text-xl font-semibold pb-2">
          Our Shop: Find Your Favorite Products!
        </h1>
        <p className="text-sm font-medium pb-4">
          Explore a variety of products at great prices! Shop now to discover
          what you need
        </p>
      </div>
      <div>
        <Product/>
      </div>
    </div>
  );
};

export default Shop;
