import { React } from "react";
export default function Button({
  className = "",
  onClick = () => {},
  children,
}) {
  // console.log(onClick);
  return (
    <button
      className={`${className}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
}
