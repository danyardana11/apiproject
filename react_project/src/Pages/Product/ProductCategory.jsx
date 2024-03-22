import ProductForm from "./ProductForm";

export default function ProductCategory(second) {
  return (
    <ProductForm>
      <select
        name="categorylist"
        id="categorylist"
        className="appearance-none w-44 h-12 block bg-[#087516] font-bold text-white text-center rounded-[4px] pl-[0px] outline-none"
      >
        <option className="bg-gray-200 text-black" value="Flower">Flower</option>
        <option className="bg-gray-200 text-black" value="Tree">Tree</option>
        <option className="bg-gray-200 text-black" value="Gift">Gift</option>
      </select>
    </ProductForm>
  );
}
