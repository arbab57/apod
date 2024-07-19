import React from "react";
import { FaCog } from "react-icons/fa";

const loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-950">
      <FaCog className="text-7xl text-white cog" />
    </div>
  );
};

export default loading;
