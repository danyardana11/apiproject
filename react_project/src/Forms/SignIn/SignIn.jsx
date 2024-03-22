import { Link } from "react-router-dom";
import Button from "src/Components/button";
import Input from "src/Components/Input";
import Form from "src/Components/Form";

export default function SignIn({ className = "", children, method }) {
  return (
    <div
      className={`rounded-3xl border-[#ededed] border-[1px] w-4/6 h-[30rem] bg-gray-50 mx-auto flex overflow-hidden shadow-2xl ${className}`}
    >
      <div
        className={`bg-[url(src/Images/Greenery.avif)] w-1/2 h-full bg-cover bg-center flex flex-col justify-center`}
      >
        <span className="text-center text-4xl font-bold font-sans text-white block mr-12">
          SIGN IN
        </span>
      </div>
      <Form
        className=" w-1/2 rounded-3xl border-gray-50 bg-gray-50 mx-auto my-auto flex flex-col justify-center"
        method="post"
      >
        <div className="gap-[2rem] flex flex-col">
          <div className="">
            <label
              htmlFor="Username"
              className="w-5/6 mx-auto block text-[#088016] font-bold"
            >
              Username
            </label>
            <Input
              className="w-5/6 h-8 mx-auto block bg-gray-50 border-b-2 border-[#088016]"
              placeholder={"Username"}
              type={"text"}
              id={"Username"}
              name={`username`}
            />
          </div>
          <div className="">
            <label
              htmlFor="Password"
              className="w-5/6 mx-auto block text-[#088016] font-bold"
            >
              Password
            </label>
            <Input
              className="w-5/6 h-8 mx-auto block bg-gray-50 border-b-2 border-[#088016]"
              placeholder={"Password"}
              type={"Password"}
              id={"Password"}
              name={`Password`}
            />
            <span className="w-5/6 mx-auto block text-[#088016] text-xs mt-2 font-semibold">
              Forget your password?
            </span>
          </div>
        </div>
        <div className="mx-auto w-full flex flex-col">
          <Button className="w-5/6 h-12 rounded-full mx-auto bg-[#087516] text-white text-[1.25rem] font-bold shadow-[0_9px_20px_-10px_rgba(0,0,0,0.6)]">
            Send
          </Button>
          <Link
            to={"/Product"}
            className="mx-auto block text-[#089616] mt-[6px]"
          >
            Dont have account? <span className="font-semibold">Sign up</span>
          </Link>
        </div>
      </Form>
    </div>
  );
}
