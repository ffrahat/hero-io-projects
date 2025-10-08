import React from "react";
import { useParams } from "react-router";
import useAllApps from "../../Hooks/AllApps";
import Loading from "../Loading/Loading";
import DownloadIcon from "../../assets/icon-downloads.png";
import Ratingcon from "../../assets/icon-ratings.png";
import Reviewcon from "../../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";

const AppsDetails = () => {
  const { id } = useParams();
  const { appsData, loading, error } = useAllApps();
  if (loading) return <Loading />;
//   console.log(appsData);
  if (error) return <p>Error Hoise</p>;

  const app = appsData.find((a) => a.id === Number(id));
  const {
    title,
    description,
    image,
    downloads,
    reviews,
    ratingAvg,
      size,
    
  } = app;
    // console.log(ratings);
    const inMillion = (downloads / 1000000).toFixed(2) + " M";


    const handleInstall = () => {
        localStorage.setItem('wishlish', JSON.stringify(app))
        toast.success(title + ' Install Successfully !')
    }

  return (
    <div>
      <div className="shadow flex flex-col md:flex-row items-stretch gap-4">
        <div className="md:w-[300px] w-full p-2">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
        <div className="flex-1 space-y-5 p-2">
          <div >
            <h1 className="font-bold text-2xl md:text-4xl mb-2">{title}</h1>
            <p>
              Developed by <span className="text-[#713ae7]">productive.io</span>
                      </p>
                      <div className="w-full mt-5 border-b-1 border-gray-300"></div>
          </div>

          <div className="flex items-center gap-10 md:gap-15 text-left">
            <div className="space-y-2">
              <img src={DownloadIcon} alt="" />
              <p>Downloads</p>
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
              <h1 className="font-bold text-2xl">{reviews}</h1>
            </div>
          </div>

          <div>
            <button onClick={handleInstall} className="btn bg-[#00d390] text-white">
              Install Now ( {size} MB )
            </button>
          </div>
        </div>
          </div>
          
          <div className="mt-10">
              <h1 className="font-bold text-2xl mb-2">Description</h1>
              <div>
                  <p>{ description}</p>
              </div>
          </div>
           <ToastContainer />
    </div>
  );
};

export default AppsDetails;
