import React from "react";

export default function ProductForm({className = "", children, method}) {
  return (
    <form action="" className={`${className}`} method={`${method}`}>
      {children}
    </form>
  );
}