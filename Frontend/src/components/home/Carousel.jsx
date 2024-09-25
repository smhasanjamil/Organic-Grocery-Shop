import img_01 from "../../assets/images/hero-carousel-01.jpg";
import img_02 from "../../assets/images/hero-carousel-02.jpg";

const Carousel = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img_01} className="w-full" />
          {/* Text start */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40 px-4">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">Fresh Produce Delivered to <span className="text-yellow-400">Your Doorstep</span></h1>
            <p className="mt-4 text-sm md:text-lg lg:text-xl text-center">Discover the freshest fruits and vegetables, handpicked daily and delivered straight to your home. </p>
          </div>
          {/* Text end */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle btn-sm md:btn-md">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img_02} className="w-full" />
          {/* Text start */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40 px-4">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">Your One-Stop Shop for <span className="text-yellow-400">Everyday Essentials</span></h1>
            <p className="mt-4 text-sm md:text-lg lg:text-xl text-center">From pantry staples to household necessities, we’ve got everything you need.</p>
          </div>
          {/* Text end */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
