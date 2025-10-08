import React from "react";
import DownloadIcon from "../../assets/icon-downloads.png";
import Ratingcon from "../../assets/icon-ratings.png";

const InstallationCard = ({ app, handleUninstall }) => {
  const { title, image, downloads, size, ratingAvg, id } = app;
  const inMillion = (downloads / 100000).toFixed(2) + ' M';
  const handleUnsitallBtn = handleUninstall;

  
  // console.log(inMillion)
  return (
    <div className="bg-white p-2 md:p-5 flex md:items-center items-left justify-between flex-col md:flex-row mb-5 rounded-md">
      <div className="flex items-center gap-3 md:gap-5 justify-stretch">
        <div className="flex items-center justify-center w-[70px] h-[70px] ">
          <img className="rounded-md p-1 shadow w-full h-full object-cover" src={image} alt="" />
        </div>

        <div>
          <h1 className="text-2xl font-semibold mb-2">{title}</h1>
          <div className="flex items-center gap-5">
            <p className="text-[#2ED99F] font-semibold flex items-center justify-center">
              <img className=" flex items-center gap-2 w-[15px] h-[15px] mr-2" src={DownloadIcon} alt="" />
              {inMillion}
            </p>
            <p className="text-[#2ED99F] font-semibold flex items-center justify-center">
              <img className=" flex items-center gap-2 w-[15px] h-[15px] mr-2" src={Ratingcon} alt="" />
              {ratingAvg}
            </p>

            <p>{size} MB</p>
          </div>
        </div>
      </div>

      <div className="mt-3 md:mt-0">
        <button onClick={()=>handleUnsitallBtn(id)} className="btn bg-green-500 text-white">Uninstall</button>
      </div>
    </div>
  );
};

export default InstallationCard;
