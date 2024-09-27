import { useState } from "react";
import PropTypes from "prop-types";

const TabNavigation = ({ onSelectTab }) => {
  const [activeTab, setActiveTab] = useState("Personal");

  const tabs = ["Personal", "Bookings", "Reviews", "Settings", "Notifications"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onSelectTab(tab);
  };

  return (
    <div className="bg-white shadow-sm p-4 mt-4 rounded-md w-full max-w-xs">
      <ul className="space-y-2">
        {tabs.map((tab) => (
          <li key={tab}>
            <button
              className={`w-full text-left px-4 py-2 rounded-md ${
                activeTab === tab
                  ? "bg-yellow-500 text-white"
                  : "text-gray-600 hover:bg-yellow-100"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

TabNavigation.propTypes = {
  onSelectTab: PropTypes.func.isRequired,
};

export default TabNavigation;
