import AccountForm from "src/Forms/Account/AccountForm";

export default function Account() {
  return (
    <AccountForm
      className="bg-gray-50 w-full h-[32rem] mx-auto flex  justify-around items-center gap-[6px] shadow-md "
      method="post"
      photo="Account-Pic.jpg"
      name="Muhammed Taha Aziz"
      number="07509243202"
      email="Example@example.com"
      placeholder="Name"
    ></AccountForm>
  );
}
