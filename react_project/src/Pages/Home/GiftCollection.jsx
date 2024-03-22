import { Link } from "react-router-dom";

export default function GiftCollection(second) {
  return (
    <div className="mt-20 mb-20">
      <p className="w-full text-center text-4xl font-serif font-semibold">
        Gift Collection
      </p>
      <div className="w-full h-[35rem] mt-12 relative">
        <img
          src="Home-Images/Gift-Flower.jpg"
          className="w-full h-full rounded-3xl"
          alt=""
        />
        <div className="w-full h-full bg-black/40 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center gap-5 text-white rounded-3xl">
          <p className="w-[33rem] text-center text-3xl font-semibold -mt-20">
            Make moments memorable - choose from our exquisite range of gifts
            for your loved ones
          </p>
          <p className="text-xl font-semibold">
            Click this to see Gift Products
          </p>
          <Link to={"/Product"}>
            <p className="w-52 h-14 border-[1px] border-stone-500 rounded-lg backdrop-blur-sm bg-black/10 text-xl font-semibold flex justify-center items-center">
              See More
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
