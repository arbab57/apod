import React from "react";

const image = ({ data }) => {
  return (
    <div className="con-img">
      <img className="w-screen" src={data.hdurl} alt={data.title} />
    </div>
  );
};

export default image;
