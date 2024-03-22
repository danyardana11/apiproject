import { React } from "react";
export default function Form({ className = "", children }) {
  return (
    <form action="" className={`${className}`}>
      <div className={`w-5/6 mx-auto gap-[3.75rem] flex flex-col ${className}`}>
        {children}
      </div>
    </form>
  );
}