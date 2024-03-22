import { Link } from "react-router-dom";
import Button from "src/Components/button";
export default function DiscountSection(second) {
  return (
    <div>
      <p className="w-full text-center text-4xl font-bold font-serif mt-20">
        Profit Most Discounts
      </p>
      <div className="w-full h-[35rem] bg-green-100">
        <div className="mx-auto w-5/6 h-full">
          <div className="flex mt-14">
            <div className="flex ml-5">
              <img
                src="Home-Images/FlowerCollection/Pink-Flower.jpg"
                className="w-96 h-[28rem] rounded-2xl -rotate-6"
                alt=""
              />
              <img
                src="Home-Images/FlowerCollection/Pink-Tree.jpg"
                className="w-68 h-96 rounded-2xl rotate-12 mt-36 -ml-16"
                alt=""
              />
            </div>
            <div className="ml-14">
              <p className="w-[36rem] h-28 mt-5 flex justify-center items-center bg-green-700 text-4xl text-white font-serif font-semibold rounded-md rounded-tr-3xl">
                Why pay more elsewhere?
              </p>
              <p className="w-[36rem] my-10 leading-7 tracking-wide text-2xl font-semibold">
                Treat yourself to a savings shopping trip with our e-commerce
                platform, where unbeatable prices guarantee you a low-cost
                ticket
              </p>
              <p className="w-[36rem] h-28 leading-7 tracking-wide text-2xl font-semibold">
                Get the most beautiful products at lower prices than anywhere
                else with us
              </p>
              <Link to={"/Product"} className="w-72 h-20">
                <Button className="mx-auto w-72 h-20 flex justify-center items-center bg-green-700 text-3xl text-white font-semibold rounded-md ">
                  See More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
