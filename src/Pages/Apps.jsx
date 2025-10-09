import React, { useEffect, useRef, useState } from "react";
import useAllApps from "../Hooks/AllApps";
import AppsCard from "../Components/AppsCard/AppsCard";
import { Link } from "react-router";
import AppError from "../Components/Error/AppError";
import Loading from "../Components/Loading/Loading";

const Apps = () => {
  const [search, setSearch] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const prevSearchRef = useRef("");

  useEffect(() => {
    if (search.trim() !== "" && search.length > prevSearchRef.current.length) {
      setShowLoading(true);
      const t = setTimeout(() => setShowLoading(false), 1000);
      prevSearchRef.current = search;
      return () => clearTimeout(t);
    } else {
      prevSearchRef.current = search;
      setShowLoading(false);
    }
  }, [search]);

  const { appsData, loading, error } = useAllApps();
  if (loading) return <Loading></Loading>;
  console.log(appsData);
  if (error) return <p>Error Hoise</p>;

  const turm = search.trim().toLocaleLowerCase();
  const findApps = turm
    ? appsData.filter((app) => app.title.toLocaleLowerCase().includes(turm))
    : appsData;
  console.log(findApps);

  return (
    <div className="py-5">
      <div>
        <div className="text-center space-y-3 mb-5">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Our All Applications{" "}
            <i class="fa-brands fa-app-store text-[#713ae7]"></i>
          </h1>
          <p className="text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between py-4 my-4">
            <p className="font-semibold text-2xl">
              ({findApps.length}) Apps Found
            </p>
            <label htmlFor="" className="input">
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="search"
                name=""
                placeholder="Search Apps"
              />
            </label>
          </div>
        </div>

        <div>
          {showLoading && (
            <div className="">
              <Loading />
            </div>
          )}
        </div>
      </div>
      <div className={`${showLoading ? "hidden" : "block"}`}>
        <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-4 gap-8 p-2">
          {findApps.map((app) => (
            <AppsCard key={app.id} app={app}></AppsCard>
          ))}
        </div>
      </div>
      <div className={`${findApps.length === 0 ? "flex" : "hidden"} ${showLoading ? "hidden" : "block"}`}>
        <AppError></AppError>
      </div>
      <div className="text-center mt-10 w-full">
        <Link
          className={`w-full flex items-center justify-center ${
            findApps.length === 0 ? "hidden" : "flex"
          }`}
        >
          <button
            className={`text-white btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1) 100%)] ${
              showLoading ? "hidden" : "block"
            }`}
          >
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Apps;
