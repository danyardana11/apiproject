import Button from "src/Components/button";
import Input from "src/Components/Input";
import Form from "src/Components/Form";

export default function SignUp(second, method) {
  return (
    <div className="rounded-3xl border-[#ededed] border-[1px] w-4/6 h-[36rem] bg-gray-50 mx-auto flex overflow-hidden shadow-2xl">
      <div
        className={`bg-[url(src/Images/Greenery.avif)] w-1/2 h-full bg-cover bg-center flex flex-col justify-center`}
      >
        <span className="text-center text-4xl font-bold font-sans text-white block mr-12">
          SIGN UP
        </span>
      </div>
      <Form
        className=" w-1/2 rounded-3xl border-gray-50 bg-gray-50 mx-auto my-auto flex flex-col justify-center"
        method="post"
      >
        <div className="gap-[1.375rem] flex flex-col">
          <div className="">
            <label
              htmlFor="username"
              className="w-5/6 mx-auto block text-[#088016] font-bold"
            >
              Username
            </label>
            <Input
              className="w-5/6 h-8 mx-auto block bg-gray-50 border-b-2 border-[#088016]"
              placeholder={"Username"}
              type={"text"}
              id={"username"}
              name={`username`}
            />
          </div>
          <div className="">
            <label
              htmlFor="phone"
              className="w-5/6 mx-auto block text-[#088016] font-bold"
            >
              Phone
            </label>
            <Input
              className="w-5/6 h-8 mx-auto block bg-gray-50 border-b-2 border-[#088016]"
              placeholder={"Phone"}
              type={"text"}
              id={"phone"}
              name={`phone`}
            />
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="w-5/6 mx-auto block text-[#088016] font-bold"
            >
              Email
            </label>
            <Input
              className="w-5/6 h-8 mx-auto block bg-gray-50 border-b-2 border-[#088016]"
              placeholder={"Email"}
              type={"email"}
              id={"email"}
              name={`email`}
            />
          </div>
          <div className="">
            <label
              htmlFor="password"
              className="w-5/6 mx-auto block text-[#088016] font-bold"
            >
              Password
            </label>
            <Input
              className="w-5/6 h-8 mx-auto block bg-gray-50 border-b-2 border-[#088016]"
              placeholder={"Password"}
              type={"password"}
              id={"password"}
              name={`password`}
            />
          </div>
          <div className="">
            <label
              htmlFor="confirm Password"
              className="w-5/6 mx-auto block text-[#088016] font-bold"
            >
              Confirm Password
            </label>
            <Input
              className="w-5/6 h-8 mx-auto block bg-gray-50 border-b-2 border-[#088016]"
              placeholder={"Confirm Password"}
              type={"password"}
              id={"confirm password"}
              name={`confirm password`}
            />
          </div>
        </div>
        <div className="w-full flex mt-[-10px]">
          <Button className="w-5/6 h-12 rounded-full mx-auto bg-[#087516] text-white text-[1.25rem] font-bold shadow-[0_9px_20px_-10px_rgba(0,0,0,0.6)]">
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
}
