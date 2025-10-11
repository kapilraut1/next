import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around items-center p-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/career">Career</Link>
        <Link href="/products">Products</Link>
      </div>
    </>
  );
};

export default Navbar;
