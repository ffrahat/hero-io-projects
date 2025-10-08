import React from "react";
import Hero from "../assets/hero.png";
import PlaystoreLogo from "../assets/playstore.png";
import AppStoreLogo from "../assets/apps-store.png";
import useAllApps from "../Hooks/AllApps";
import AppsCard from "../Components/AppsCard/AppsCard";
import { Link } from "react-router";

const Home = () => {
  const { appsData, loading, error } = useAllApps();
  const fetureApps = appsData.slice(0, 8);
  if (loading) return <p>Loading...</p>;
  console.log(appsData);
  if (error) return <p>Error Hoise</p>;

  return (
    <div className="">
      <div className="text-center">
        <h1 className="font-semibold text-2xl md:text-4xl mb-4">
          We Build <br />{" "}
          <span className="text-[#713ae7] font-bold leading-10 md:leading-15">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-gray-500">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>

      <div className="flex items-center gap-5 justify-center mt-8">
        <a className="btn p-2" href="https://play.google.com/">
          <img className="w-[30px] h-[30px]" src={PlaystoreLogo} alt="" />
          Google Play
        </a>
        <a className="btn p-2" href="https://www.apple.com/app-store/">
          <img className="w-[30px] h-[30px]" src={AppStoreLogo} alt="" />
          Apps Store
        </a>
      </div>

      <div className="mt-10">
        <img className="mx-auto" src={Hero} alt="" />
        <div className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white py-10 px-5 ">
          <h1 className="md:text-3xl text-xl text-center">
            Trusted by Millions, Built for You
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            <div className="text-center p-2">
              <p>Total Downloads</p>
              <h1 className="font-bold text-3xl md:text-4xl">29.6M</h1>
              <p>21% more than last month</p>
            </div>

            <div className="text-center p-2">
              <p>Total Reviews</p>
              <h1 className="font-bold text-3xl md:text-4xl">906K</h1>
              <p>46% more than last month</p>
            </div>

            <div className="text-center p-2">
              <p>Active Apps</p>
              <h1 className="font-bold text-3xl md:text-4xl">132+</h1>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 my-10">
        <div className="text-center mb-5">
          <h1 className="font-bold text-2xl md:text-4xl flex items-center justify-center">
            Trending Apps
            <span>
              <i className="bx bx-trending-up text-green-500 text-5xl" />
            </span>
          </h1>
          <p className="text-gray-500">
            Explore All Trending Apps on the Market developed by us{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-4 gap-4 md:gap-8 p-2">
          {fetureApps.map((app) => (
            <AppsCard key={app.id} app={app}></AppsCard>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            className="px-5 btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white"
            to="/apps"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
