import React, { useEffect, useState } from "react";
import InstallationCard from "../Components/InstallationCard/InstallationCard";
import NoResultFound from "../Components/Error/NoResultFound";

const Installation = () => {
  const savedList = JSON.parse(localStorage.getItem("installed"));
    const [installed, setInstalled] = useState([]);
    const [shorted, setShorted] = useState('none');
    console.log(shorted)

  useEffect(() => {
      if (savedList) setInstalled(savedList);
  }, []);
    
    const handleShort = () => {
  if (shorted === 'low-high') {
    return [...installed].sort((a, b) => a.size - b.size);
  } 
  else if (shorted === 'high-low') {
    console.log('ok');
    return [...installed].sort((a, b) => b.size - a.size);
  } 
  else {
    return [...installed];
  }
  };
  
  const handleUninstall = (id) => {
    const existingList = JSON.parse(localStorage.getItem('installed'));
        let updatedList = [];
        if (existingList) {
          updatedList = existingList.filter(p => p.id !== id)
          localStorage.setItem('installed', JSON.stringify(updatedList))
          setInstalled(updatedList)
        }
  }

  return (
    <div >
      
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Your Installed Apps <i className='bx bx-gift text-[#713ae7]'  ></i> 
        </h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className={`${installed.length===0? 'hidden': 'block'}`}>
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-semibold ">
            {installed.length} Apps Found
          </h1>
          <label className="select w-[150px]" htmlFor="">
            <select value={shorted} onChange={(e)=>setShorted(e.target.value)}>
              <option value="none">Short</option>
              <option value="low-high">Low-High</option>
              <option value="high-low">High-Low</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        {handleShort().map((app) => (
          <InstallationCard key={app.id} app={app} handleUninstall={handleUninstall}></InstallationCard>
        ))}
      </div>
      <div className={`min-h-[400px] flex items-center justify-center ${installed.length===0? 'flex': 'hidden'}`}>
        <NoResultFound></NoResultFound>
      </div>
    </div>
  );
};

export default Installation;
