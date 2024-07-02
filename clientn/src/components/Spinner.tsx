import React from "react";

const Spinner = () => {
  return (
    <div className=" flex justify-center my-2">
      <span className="animate-spin w-6 h-6 border-slate-900 border-r-2 border-l-2 font-bold rounded-full"></span>
    </div>
  );
};

export default Spinner;
