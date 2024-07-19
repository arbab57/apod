import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const side = ({ data, isHidden, change }) => {
  function handleClick() {
    change((prev) => !prev);
  }
  let classes =
    "bg-neutral-800 text-white text-3xl p-6 flex flex-col gap-2 side sm:w-1/3";
  classes = isHidden
    ? "bg-neutral-800 text-white text-3xl p-6 flex flex-col gap-2 side hidden sm:w-1/2"
    : "bg-neutral-800 text-white text-3xl p-6 flex flex-col gap-2 side sm:w-1/3";

  return (
    <div className={classes}>
      <div onClick={handleClick} className="cursor-pointer">
        <FaArrowRight />
      </div>
      <div className="flex flex-col gap-7">
        <h2 className="text-5xl">{data.title}</h2>
        <p>{data.date}</p>
        <p className="text-2xl">{data.explanation}</p>
      </div>
    </div>
  );
};

export default side;
