import React from "react";
export default function Input({
  className = "",
  children,
  placeholder,
  id,
  name,
  type,
}) {
  return (
    <input
      type={`${type}`}
      placeholder={`${placeholder}`}
      className={`outline-none pl-2 ${className}`}
      id={`${id}`}
      name={`${name}`}
    >
      {children}
    </input>
  );
}