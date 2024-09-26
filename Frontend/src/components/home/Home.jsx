import Blog from "../blog/Blog";
import Product from "../shop/product/Product";
import ProductCategory from "../shop/product/ProductCategory";
import CallToAction from "./CallToAction";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <Carousel />
      {/* Product Section start */}
      <div className="max-w-7xl mx-auto my-20">
        <p className="text-center italic font-bold">Top Picks</p>
        <h2 className="mt-3 mb-5 text-center text-2xl">
          Latest{" "}
          <span className="bg-green-600 border-2 border-green-600 rounded-full text-white p-1">
            Products
          </span>
        </h2>
      </div>

      <Product />
      {/* Product Section end */}

      {/* Category Section start */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto my-20 pt-20">
          <p className="text-center italic font-bold">Top Category</p>
          <h2 className="mt-3 mb-5 text-center text-2xl">
            Category{" "}
            <span className="bg-green-600 border-2 border-green-600 rounded-full text-white p-1">
              Products
            </span>
          </h2>
        </div>

        <ProductCategory />
      </div>
      {/* Category Section End */}

      {/* CTA Section start */}

      <div className="max-w-7xl mx-auto my-20 ">
        <CallToAction />
      </div>

      {/* CTA Section End */}

      {/* Blog Section start */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto my-20 pt-20">
          <p className="text-center italic font-bold">Our Blog</p>
          <h2 className="mt-3 mb-5 text-center text-2xl">
            Grocery & Food{" "}
            <span className="bg-green-600 border-2 border-green-600 rounded-full text-white p-1">
              News
            </span>
          </h2>
        </div>

        <Blog />
        <div className="h-10"></div>
      </div>
      {/* Blog Section End */}
    </>
  );
};

export default Home;
