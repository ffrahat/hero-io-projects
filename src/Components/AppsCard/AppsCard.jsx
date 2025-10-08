import React from "react";
import DownloadIcon from "../../assets/icon-downloads.png";
import Ratingcon from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
  const { title, image, downloads, id, ratingAvg } = app;
const inMillion = (downloads / 1000000).toFixed(2) + " M";

  return (
    <Link to={`/apps/${id}`}>
      <div className="p-2 md:p-4 rounded-xl shadow-sm border border-gray-100">
      <div className="w-full overflow-hidden">
        <img
          className="mx-auto w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
          src={image}
          alt=""
        />
      </div>
      <div className="space-y-2 mt-4">
        <h1 className="font-semibold text-2xl">{title}</h1>
        <div className="flex items-center justify-between">
          <p className="text-[#2ED99F] font-semibold flex items-center justify-center">
            <img className="w-[15px] h-[15px] mr-2" src={DownloadIcon} alt="" />
            {inMillion}
          </p>
          <p className=" flex items-center justify-center bg-amber-100 px-2">
            <img className="w-[15px] h-[15px] mr-2" src={Ratingcon} alt="" />{ratingAvg}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default AppsCard;
