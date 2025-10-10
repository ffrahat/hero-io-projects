import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAllApps from "../../Hooks/AllApps";
import Loading from "../Loading/Loading";
import DownloadIcon from "../../assets/icon-downloads.png";
import Ratingcon from "../../assets/icon-ratings.png";
import Reviewcon from "../../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import AppError from "../Error/AppError";

const AppsDetails = () => {
  const { id } = useParams();
  const [install, setInstall] = useState(false);
  console.log(install);

  const { appsData, loading, error } = useAllApps();

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("installed"));
    if (!existingList) return;

    if (existingList.some((a) => a.id === Number(id))) {
      setInstall(true);
    }
  }, []);

  if (loading) return <Loading />;
  //   console.log(appsData);
  if (error) return <p>Error Hoise</p>;

  const app = appsData.find((a) => a.id === Number(id));
  if (!app) return <AppError></AppError>;

  const {
    title,
    description,
    image,
    downloads,
    reviews,
    ratingAvg,
    ratings,
    size,
  } = app;

  // console.log(ratings);
  const inMillion = (downloads / 1000000).toFixed(2) + " M ";
  const inK = (reviews / 1000).toFixed(0) + " K ";
  const handleInstall = () => {
    setInstall(true);
    const existingList = JSON.parse(localStorage.getItem("installed"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === app.id);
      if (isDuplicate) return toast.warning("Already Installed...!");
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("installed", JSON.stringify(updatedList));
    toast.success(title + " Install Successfully !");
  };

  return (
    <div>
      <div className="shadow flex flex-col md:flex-row items-stretch gap-4">
        <div className="md:w-[300px] w-full p-2">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
        <div className="flex-1 space-y-5 p-2">
          <div>
            <h1 className="font-bold text-2xl md:text-4xl mb-2">{title}</h1>
            <p>
              Developed by <span className="text-[#713ae7]">productive.io</span>
            </p>
            <div className="w-full mt-5 border-b-1 border-gray-300"></div>
          </div>

          <div className="flex items-center justify-between md:justify-start gap-5 md:gap-15 text-left">
            <div className="space-y-2">
              <img src={DownloadIcon} alt="" />
              <p>Download Apps </p>
              <h1 className="font-bold text-2xl">{inMillion}</h1>
            </div>
            <div className="space-y-2">
              <img src={Ratingcon} alt="" />
              <p>Average Ratings</p>
              <h1 className="font-bold text-2xl">{ratingAvg}</h1>
            </div>
            <div className="space-y-2">
              <img src={Reviewcon} alt="" />
              <p>Total Reviews</p>
              <h1 className="font-bold text-2xl">{inK}</h1>
            </div>
          </div>

          <div>
            <button
              onClick={handleInstall}
              className={`btn  text-white ${
                install
                  ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400" // Installed style
                  : "bg-[#00d390] hover:bg-[#00c080]"
              }`}
            >
              {install ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-2xl my-2">Ratings: </h1>
        <div className="w-full h-[300px] text-black">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[...ratings].reverse()} layout="vertical">
              <YAxis dataKey="name" type="category" stroke="#000" />
              <XAxis type="number" stroke="#000" />
              <Tooltip />
              <Bar dataKey="count" fill="#FF8811" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-2xl mb-2">Description</h1>
        <div>
          <p>{description}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppsDetails;
