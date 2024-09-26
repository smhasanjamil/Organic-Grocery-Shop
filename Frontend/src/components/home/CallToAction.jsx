import foodcta from "../../assets/images/food-cta.jpg";

const CallToAction = () => {
  return (
    <>
      <div className="bg-white min-h-[475px] px-4 lg:px-0">
        <div className="grid md:grid-cols-2 justify-center items-center max-md:text-center gap-8">
          
          <div className="max-w-md mx-auto p-4">
            <button className="btn inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-6">
              Your online resource of healthy recipes
            </button>
            <h2 className="text-gray-800 text-4xl md:text-5xl font-extrabold mb-6 md:!leading-[55px]">
              Organic Vegetables Everyday
            </h2>
            <p className="text-gray-800 text-base">
              Upgrade to our premium plan and supercharge your experience. Dont
              miss out!
            </p>

            <div className="mt-12 space-y-6">
              <button className="px-4 py-2 text-white bg-green-600 rounded-lg duration-150 hover:bg-green-700 active:shadow-lg">
                Order Now
              </button>
            </div>
          </div>
          <div className="md:text-right max-md:mt-12 h-full">
            <img
              src={foodcta}
              alt="Premium Benefits"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
