import React from "react";

const PageNotFound = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-red-600">
        <h1 className="text-8xl font-bold mb-6">ERROR 404</h1>
        <p className="text-2xl text-center">
          Page not found.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;