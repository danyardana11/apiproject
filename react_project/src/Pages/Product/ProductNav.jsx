import ProductCategory from "./ProductCategory";
import ProductForm from "./ProductForm";
import Button from "../../Components/button";

export default function ProductNav() {
  return (
    <ProductForm className="fixed left-0 right-0 mt-[-5.925rem] bg-white">
      <div className="w-5/6 mx-auto flex justify-between my-[0.9375rem]">
        <ProductCategory></ProductCategory>
        <div className=" flex gap-4  bg-transparent">
          <Button
            className=" h-12 rounded-[4px]  bg-gray-200 hover:bg-gray-300 focus:bg-[#087516] focus:text-white text-[#349e60] text-[1.125rem] font-bold px-5"
            id="spring"
            name="spring"
          >
            SPRING
          </Button>
          <Button
            className=" h-12 rounded-[4px]  bg-gray-200 hover:bg-gray-300 focus:bg-[#087516] focus:text-white text-[#349e60] text-[1.125rem] font-bold px-5"
            id="summer"
            name="summer"
          >
            SUMMER
          </Button>
          <Button
            className=" h-12 rounded-[4px]  bg-gray-200 hover:bg-gray-300 focus:bg-[#087516] focus:text-white text-[#349e60] text-[1.125rem] font-bold px-5"
            id="autumn"
            name="autumn"
          >
            AUTUMN
          </Button>
          <Button
            className=" h-12 rounded-[4px]  bg-gray-200 hover:bg-gray-300 focus:bg-[#087516] focus:text-white text-[#349e60] text-[1.125rem] font-bold px-5"
            id="winter"
            name="winter"
          >
            WINTER
          </Button>
          <Button
            className=" h-12 rounded-[4px]  bg-gray-200 hover:bg-gray-300 focus:bg-[#087516] focus:text-white text-[#349e60] text-[1.125rem] font-bold px-5"
            id="four seasons"
            name="four seasons"
          >
            Four Seasons
          </Button>
          {/* <Button
            className=" h-12 rounded-[4px]  bg-gray-200 hover:bg-gray-300 focus:bg-[#087516] focus:text-white text-[#349e60] text-[1.125rem] font-bold px-5"
            id="trend"
            name="trend"
          >
            TREND
          </Button> */}
          <Button
            className=" h-12 rounded-[4px]  bg-gray-200 hover:bg-gray-300 focus:bg-[#087516] focus:text-white text-[#349e60] text-[1.125rem] font-bold px-5"
            id="discount"
            name="discount"
          >
            DISCOUNT
          </Button>
        </div>
      </div>
    </ProductForm>
  );
}
