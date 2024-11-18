import { useState } from 'react';

const TabBar = () => {
  const [activeTab, setActiveTab] = useState(0); // State to manage active tab

  const tabs = ['Upcoming IDOs', 'Live IDOs', 'Ended IDOs']; // Tab names

  return (
    <div className="w-full font-semibold">
      <div className="flex justify-between">
        <div className="flex text-xl text-white">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`w-[200px] py-2 text-center border-b-2 ${
                activeTab === index
                  ? 'border-yellow text-yellow'
                  : 'border-primary text-grey-normal hover:text-yellow'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <a
          href="#/create-ido"
          className="px-6 py-2 rounded-xl bg-pink font-bold text-primary text-[18px]"
        >
          Create IDO
        </a>
      </div>

      {/* Tab Content */}
      <div className="mt-5"></div>
    </div>
  );
};

export default TabBar;
