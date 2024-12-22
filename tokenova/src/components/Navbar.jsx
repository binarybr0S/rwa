import React from "react";
import Cookies from "js-cookie";

const UnauthenticatedNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background text-white px-6 py-4 flex items-center justify-between z-20">
      <div className="text-2xl font-bold">TOKENOVA</div>
      <div className="space-x-6 flex items-center">
      <a href="/profile" className="hover:text-primary">
      <i class="ri-user-fill ri-lg"></i>
      </a>
        <a href="/" className="hover:text-primary">
          Trade
        </a>
        <a href="/about" className="hover:text-primary">
          About
        </a>
      </div>
    </nav>
  );
};

const LoggedInNavbar = () => {
  const logout = () => {
    Cookies.remove("token");
    window.location.href = "/";
  }
  return (
    <nav className="fixed top-0 left-0 w-full bg-background text-white px-6 py-4 flex items-center justify-between z-20">
      <div className="text-2xl font-bold">TOKENOVA</div>
      <div className="space-x-6 flex items-center">
        <a href="/" className="hover:text-primary">
          Home
        </a>
        <a href="/" className="hover:text-primary">
          My Assets
        </a>
        <a href="/transaction-history" className="hover:text-primary">
          Transaction History
        </a>
        <a href="/profile" className="hover:text-primary">
          Profile
        </a>
        <a href="/explore" className="hover:text-primary">
          Share Assets
        </a>
        <div className="flex-grow"></div>
        <a
          onClick={logout}
          className="bg-primary px-4 py-2 rounded text-white hover:bg-accent cursor-pointer"
        >
          Logout
        </a>
      </div>
    </nav>
  );
};

const Navbar = () => {
  return Cookies.get("token") ? <LoggedInNavbar /> : <UnauthenticatedNavbar />;
}

export default Navbar;
