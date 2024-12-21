import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background text-white px-6 py-4 flex items-center justify-between z-20">
      <div className="text-2xl font-bold">TOKENOVA</div>
      <div className="space-x-6 flex items-center">
        <a href="/" className="hover:text-primary">
          Trade
        </a>
        <a href="/login" className="hover:text-primary">
          Login
        </a>
        <a href="/about" className="hover:text-primary">
          About
        </a>
        <a
          href="/signup"
          className="bg-primary px-4 py-2 rounded text-white hover:bg-accent"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
