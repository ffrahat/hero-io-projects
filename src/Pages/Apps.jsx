import React, { useState } from "react";
import useAllApps from "../Hooks/AllApps";
import AppsCard from "../Components/AppsCard/AppsCard";
import { Link } from "react-router";
import AppError from "../Components/Error/AppError";

const Apps = () => {
  const [search, setSearch] = useState("");
  const { appsData, loading, error } = useAllApps();
  if (loading) return <p>Loading...</p>;
  console.log(appsData);
    if (error) return <p>Error Hoise</p>;
    
    const turm = search.trim().toLocaleLowerCase();
    const findApps = turm ? appsData.filter(app => app.title.toLocaleLowerCase().includes(turm)) : appsData;
  console.log(findApps)
  
  

  return (
    
    <div className="py-5">
      
      <div>
        <div className="text-center space-y-3 mb-5">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Our All Applications
          </h1>
          <p className="text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex items-center justify-between py-4 my-4">
          <p className="font-semibold text-2xl">({findApps.length}) Apps Found</p>
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
      <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-4 gap-8 p-2">
        {findApps.map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>
      <div className={`${findApps.length===0 ? 'flex': 'hidden'}`}>
        <AppError></AppError>
      </div>
      <div className="text-center mt-10 w-full">
        <Link className={`w-full flex items-center justify-center ${findApps.length===0? 'hidden' : 'flex'}`}>
          <button className="text-white btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default Apps;
