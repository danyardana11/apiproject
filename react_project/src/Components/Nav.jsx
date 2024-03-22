import { Link } from "react-router-dom";
import logo from "src/logo.svg";
import Input from "src/Components/Input";

export default function Navbar() {
  return (
    <div className="border-b-2 fixed top-0 left-0 right-0 bg-white z-10">
      <nav className="flex place-content-between items-center w-5/6 h-[5rem] mx-auto">
        <div className="flex items-center">
          {" "}
          {/* Left Side of navigation bar */}
          <Link to={"/"} className="flex justify-center items-center text-[1.625rem] text-[#088516] tracking-[0.125rem] font-semibold ">
            <img src={logo} alt="React Logo" className=""/>
            REENERY
          </Link>
          
        </div>
        <div className="flex items-center">
          <Input
            className="w-[25rem] h-10 bg-gray-200 rounded-full px-3"
            type={"text"}
            placeholder={"Search"}
          />
          <div className="flex place-content-between gap-6 text-[#088516] text-[1rem] font-bold translate-x-[2.25rem]">
            <Link to={"/"}>Home</Link>
            <Link to={"/Product"}>Product</Link>
            <Link to={"/About"}>About</Link>
          </div>
        </div>
        {/* Right Side of navigation bar */}
        <div className="flex place-content-between gap-3 text-[#088016] text-[1rem] font-semibold ml-8">
          <Link
            to={"/Saved"}
            className="bg-[url(src/Images/Favourite.svg)] w-10 h-10"
          ></Link>
          <Link
            to={"/Product"}
            className="bg-[url(src/Images/Add-Cart.svg)] w-10 h-10"
          ></Link>
          <Link
            to={"/Profile"}
            className="bg-[url(src/Images/User.svg)] w-10 h-10"
          ></Link>
        </div>
      </nav>
    </div>
  );
}