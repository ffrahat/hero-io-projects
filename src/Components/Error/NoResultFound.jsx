import React from "react";
import NoResultFoundImg from "../../assets/no-results.png";

const NoResultFound = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
          <img className="mx-auto w-1/5" src={NoResultFoundImg} alt="Loading..." />
          <h1 className="font-bold text-4xl mt-5">No <span className="text-red-500">Apps</span> Found</h1>
    </div>
  );
};

export default NoResultFound;
