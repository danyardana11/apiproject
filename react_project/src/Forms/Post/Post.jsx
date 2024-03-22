import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "src/Components/button";
import ProductForm from "src/Pages/Product/ProductForm";

export default function Post({ photo, method, price, title }) {
  const [saved, setSaved] = useState(false);
  console.log(saved);
  return (
    <ProductForm
      className="rounded-md w-[15.125rem] h-[23rem] mx-auto flex flex-col items-center gap-[6px] overflow-hidden shadow-md shadow-stone-300 bg-white border-stone-200 border-[1px]"
      method={method}
    >
      <Link to={"/SingleProduct"} className=" h-[58%] w-[90%] mt-3">
        <img
          className="w-[100%] h-[100%] rounded"
          src={`${photo}`}
          alt="Post Img"
        />
      </Link>
      <Link to={"/SingleProduct"} className="font-bold">
        {title}
      </Link>
      <span className="font-bold">{price}</span>
      <div className="w-5/6 flex justify-between items-center mt-3">
        <Button className="bg-[url(src/Images/Add-Order.svg)] w-10 h-10"></Button>
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
    </ProductForm>
  );
}