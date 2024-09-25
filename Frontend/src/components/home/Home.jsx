import Product from "../shop/product/Product";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <Carousel />
      {/* Product Section start */}
      <div className="max-w-7xl mx-auto my-5">
        <p className="text-center italic font-bold">Top Picks</p>
        <h2 className="mt-3 mb-5 text-center text-2xl">
          Latest{" "}
          <span className="bg-green-600 border-2 border-green-600 rounded-full text-white p-1">
            Products
          </span>
        </h2>
      </div>


      <Product/>
      {/* Product Section end */}
    </>
  );
};

export default Home;
