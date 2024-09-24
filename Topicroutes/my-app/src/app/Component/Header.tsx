
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="h-10 bg-gradient-to-tr from-blue-500 via-purple-800 to-pink-500 flex items-center justify-between p-4">
        <h2 className="text-white">AQ</h2>
        <div className="flex items-center justify-center gap-7 flex-grow">
          <Link href="./Home" className="text-white">Home</Link>
          <Link href="./About" className="text-white">About</Link>
          <Link href="./Contact" className="text-white">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
