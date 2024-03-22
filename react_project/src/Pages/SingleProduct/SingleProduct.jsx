import { useState } from "react";
import QuantityBtn from "src/Components/QuantityBtn";
import Button from "src/Components/button";
import data from "src/Forms/Post/data";

export default function SingleProduct() {
  const [saved, setSaved] = useState(false);
  return (
    <form
      id="reviewProduct"
      name="reviewProduct"
      className="w-5/6 mx-auto mt-[6rem] scrollbar-hide bg-inherit mb-12"
      method=""
    >
      <div className="flex justify-between">
        <div className="w-[31rem] h-[30rem] relative overflow-hidden rounded-lg">
          <img className="w-[100%] h-[100%]" src={data[2].src} alt="Post Img" />
          <div className="w-16 h-16 flex justify-center items-center absolute bottom-0 right-0 bg-gray-200 rounded-tl-lg">
            <Button
              onClick={() => {
                setSaved(!saved);
              }}
              className={`${
                saved
                  ? "bg-[url(src/Images/Save-Post.svg)]"
                  : "bg-[url(src/Images/Unsave-Post.svg)]"
              } w-10 h-10 `}
            ></Button>
          </div>
        </div>
        <div className="w-2/4 h-[28rem] flex flex-col justify-between">
          <div className="flex flex-col gap-8 p-0">
            <span
              className="text-5xl font-semibold"
              name="item-title"
              id="item-title"
            >
              {data[2].title}
            </span>
            <p
              name="item-discription"
              id="item-discription"
              className="w-full text-justify"
            >
              Known for its elegant and mysterious aura, the Black Baccara Rose
              (Rosa ‘Black Baccara’) captivates with its nearly black, beautiful
              deep crimson shade blooms. These roses are often associated with
              romance and luxury due to their velvety texture and intense hue.
              With a strong, pleasant fragrance, Black Baccara Roses are popular
              for bouquets and garden displays. Gardeners value this cultivar
              for its resilience and ability to withstand various weather
              conditions. Proper care, including regular pruning and adequate
              sunlight.
            </p>
          </div>
          <div className="flex flex-col justify-between h-44">
            <div className="h-[5.5rem] flex flex-col justify-between">
              <span
                className="text-4xl tracking-tight"
                name="item-price"
                id="item-price"
              >
                SEASON | {data[2].season}
              </span>
              <span
                className="text-2xl tracking-tight"
                name="item-price"
                id="item-price"
              >
                {data[2].price}
              </span>
            </div>
            <div className="flex justify-between">
              <QuantityBtn
                parentClassname="w-44 h-14 flex text-center rounded overflow-hidden border-[1px] border-gray-200"
                incClassName="w-10 bg-white text-xl font-semibold text-center"
                inpClassName="w-full h-full bg-white text-xl font-semibold text-center outline-none border-x-[1px] border-gray-200"
                decClassName="w-10 bg-white text-xl font-semibold text-center"
              />
              <Button className="w-[25rem] bg-[#087516] text-white font-bold rounded">
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
