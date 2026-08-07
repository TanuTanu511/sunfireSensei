import {
  faBriefcase,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="bg-blue-300 mt-8 h-100 mx-20 border-b-blue-400 text-center shadow-md">
        <div className="p-10">
          <h1 className="text-5xl font-serif">Innovating the Way</h1>
          <h1 className="text-5xl font-serif mt-3">You Find Jobs</h1>
        </div>
        <div>
          <h2 className="text-lg font-semibold">
            Revolutionizng career opportunities. 2,00,000 Jobs listed here! Your
            Dream job is waiting
          </h2>
        </div>
        <div className="bg-white p-3 mx-20 my-15 rounded-full">
          <div className="flex items-center justify-between">
            <p>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
              Job Title & Company
            </p>
            <p>
              <span>|</span>
              <FontAwesomeIcon icon={faBriefcase} className="mx-2" />
              Job Type
            </p>
            <p>
              <span>|</span>
              <FontAwesomeIcon icon={faLocationDot} className="mx-2" />
              Job Location
            </p>
            <p className="bg-[#022bf8] text-white px-4 py-2 mx-3 font-medium rounded-full">
              Search Jobs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
