import Account from "src/Forms/Account/Account";
import SignIn from "src/Forms/SignIn/SignIn";
// import SignUp from "src/Forms/SignUp/SignUp";

export default function Profile({ className = "", children, alt }) {
  let profile = true;
  return (
    <div className="w-5/6 mx-auto min-h-screen-mt flex flex-col justify-center mt-[5.125rem] bg-transparent">
      <div className="flex flex-col justify-center gap-3">
        {profile ? <SignIn className="" method="post"></SignIn> : <Account></Account>}

        {children}
      </div>
    </div>
  );
}
