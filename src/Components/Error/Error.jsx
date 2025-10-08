import React from "react";
import ErrorImg from "../../assets/error-404.png";
import { Link, useNavigate } from "react-router";

const Error = () => {
    const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col">
      <img className="" src={ErrorImg} alt="" />
      <div className="text-center space-y-4">
        <h1 className="font-semibold text-2xl md:text-4xl">
          Opps Page Not Found !{" "}
        </h1>
        <p className="text-gray-500">
          The page you are looking for is not aviable.
        </p>
        <Link onClick={()=> navigate(-1)} className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white">Go Back</Link>
      </div>
    </div>
  );
};

export default Error;
